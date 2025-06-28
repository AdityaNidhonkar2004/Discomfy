import { env } from "@/data/env/client"

export function Banner({
  message,
  mappings,
  customization,
  canRemoveBranding,
}: {
  canRemoveBranding: boolean
  message: string
  mappings: {
    coupon: string
    discount: string
    country: string
  }
  customization: {
    backgroundColor: string
    textColor: string
    fontSize: string
    isSticky: boolean
    classPrefix?: string | null
  }
}) {
  const prefix = customization.classPrefix ?? ""
  const mappedMessage = Object.entries(mappings).reduce(
    (mappedMessage, [key, value]) => {
      return mappedMessage.replace(new RegExp(`{${key}}`, "g"), value)
    },
    message.replace(/'/g, "&#39;")
  )

  return (
    <>
      <style type="text/css">
        {`
          .${prefix}easy-discomfy-container {
            all: revert;
            display: flex;
            flex-direction: column;
            gap: .5em;
            background-color: ${customization.backgroundColor};
            color: ${customization.textColor};
            font-size: ${customization.fontSize};
            font-family: inherit;
            padding: 1rem;
            ${customization.isSticky ? "position: sticky;" : ""}
            left: 0;
            right: 0;
            top: 0;
            text-wrap: balance;
            text-align: center;
          }

          .${prefix}easy-discomfy-branding {
            color: inherit;
            font-size: inherit;
            display: inline-block;
            text-decoration: underline;
          }
        `}
      </style>

      <div className={`${prefix}easy-discomfy-container ${prefix}easy-discomfy-override`}>
        <span
          className={`${prefix}easy-discomfy-message ${prefix}easy-discomfy-override`}
          dangerouslySetInnerHTML={{
            __html: mappedMessage,
          }}
        />
        {(
          <a
            className={`${prefix}easy-discomfy-branding`}
            href={`${env.NEXT_PUBLIC_SERVER_URL}`}
          >
            Powered by Discomfy
          </a>
        )}
      </div>
    </>
  )
}
