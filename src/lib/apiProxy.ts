import { NextRequest, NextResponse } from "next/server";

const FASTAPI_URL = process.env.FASTAPI_URL || "http://127.0.0.1:8000";

export async function proxyRequest(
  req: NextRequest,
  targetPath: string,
  options: { addApiPrefix?: boolean } = {}
) {
  const searchParams = req.nextUrl.searchParams.toString();
  const baseBackendUrl = options.addApiPrefix ? `${FASTAPI_URL}/api` : FASTAPI_URL;
  const url = `${baseBackendUrl}/${targetPath}${searchParams ? `?${searchParams}` : ""}`;

  const headers = new Headers();

  const headersToForward = [
    "authorization",
    "cookie",
    "content-type",
    "accept",
    "auth-token"
  ];

  headersToForward.forEach(headerName => {
    const value = req.headers.get(headerName);
    if (value) {
      headers.set(headerName, value);
    }
  });

  const fetchOptions: RequestInit = {
    method: req.method,
    headers: headers,
  };

  if (["POST", "PUT", "PATCH"].includes(req.method)) {
    try {
      const contentType = req.headers.get("content-type");
      if (contentType?.includes("application/json")) {
        const body = await req.json();
        fetchOptions.body = JSON.stringify(body);
      } else {
        fetchOptions.body = await req.blob();
      }
    } catch (e) {
      // No body or error parsing
    }
  }

  try {
    console.log(`[Proxy] ${req.method} ${req.nextUrl.pathname} -> ${url}`);
    const response = await fetch(url, fetchOptions);

    const contentType = response.headers.get("content-type");
    if (contentType?.includes("application/json")) {
      const data = await response.json();
      return NextResponse.json(data, { status: response.status });
    } else {
      const text = await response.text();
      return new NextResponse(text, {
        status: response.status,
        headers: { "Content-Type": contentType || "text/plain" }
      });
    }
  } catch (error) {
    console.error(`[Proxy Error] ${url}:`, error);
    return NextResponse.json(
      { success: false, error: "Failed to connect to backend service" },
      { status: 500 }
    );
  }
}
