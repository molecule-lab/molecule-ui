import { ImageResponse } from "next/og"
import { NextRequest } from "next/server"

import { Logo } from "@/components/icons/logo"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    const title = searchParams.get("title") || "Build Beautiful Interfaces"
    const description =
      searchParams.get("description") ||
      "A modern React component library focused on intuitive interactions and seamless user experiences."

    return new ImageResponse(
      <div tw="flex flex-col items-center justify-center w-full h-full relative bg-white text-black">
        {/* Background Gradient */}
        <div tw="absolute inset-0 bg-gradient-to-br from-[#fdfbff] via-[#f5f5ff] to-[#eef2ff] z-0" />

        {/* Blurred Circle */}
        <div
          tw="absolute w-[400px] h-[400px] bg-indigo-200 rounded-full opacity-30 blur-2xl"
          style={{ top: "-100px", right: "-100px" }}
        />

        {/* Content */}
        <div tw="relative z-10 flex flex-col items-center text-center px-10">
          <div tw="flex items-center mb-4">
            <Logo width={64} height={64} />
            <div tw="ml-3 text-4xl font-semibold text-gray-900">
              Molecule UI
            </div>
          </div>
          <div tw="text-6xl font-extrabold leading-tight text-gray-900 drop-shadow-md max-w-[900px]">
            {title}
          </div>
          {description && (
            <div tw="text-3xl text-gray-600 mt-2 max-w-[800px] leading-snug">
              {description}
            </div>
          )}
        </div>

        {/* Footer */}
        <div tw="absolute bottom-10 right-10 text-lg font-medium text-gray-500">
          moleculeui.design
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e: any) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
