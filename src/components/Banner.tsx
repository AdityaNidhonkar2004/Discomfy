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
<<<<<<< HEAD
          .${prefix}easy-discomfy-container {
=======
          .${prefix}easy-ppp-container {
>>>>>>> 3cf77f1a6222f6eb12d9995ae36d28b27e65b4e8
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

<<<<<<< HEAD
          .${prefix}easy-discomfy-branding {
=======
          .${prefix}easy-ppp-branding {
>>>>>>> 3cf77f1a6222f6eb12d9995ae36d28b27e65b4e8
            color: inherit;
            font-size: inherit;
            display: inline-block;
            text-decoration: underline;
          }
        `}
      </style>

<<<<<<< HEAD
      <div className={`${prefix}easy-discomfy-container ${prefix}easy-discomfy-override`}>
        <span
          className={`${prefix}easy-discomfy-message ${prefix}easy-discomfy-override`}
=======
      <div className={`${prefix}easy-ppp-container ${prefix}easy-ppp-override`}>
        <span
          className={`${prefix}easy-ppp-message ${prefix}easy-ppp-override`}
>>>>>>> 3cf77f1a6222f6eb12d9995ae36d28b27e65b4e8
          dangerouslySetInnerHTML={{
            __html: mappedMessage,
          }}
        />
        {!canRemoveBranding && (
          <a
<<<<<<< HEAD
            className={`${prefix}easy-discomfy-branding`}
            href={`${env.NEXT_PUBLIC_SERVER_URL}`}
          >
            Powered by Discomfy
=======
            className={`${prefix}easy-ppp-branding`}
            href={`${env.NEXT_PUBLIC_SERVER_URL}`}
          >
            Powered by Easy PPP
>>>>>>> 3cf77f1a6222f6eb12d9995ae36d28b27e65b4e8
          </a>
        )}
      </div>
    </>
  )
}
