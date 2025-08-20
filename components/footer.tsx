export function Footer() {
  return (
    <footer className="border-border relative border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-muted-foreground text-center text-sm leading-loose md:text-left">
          Built by{" "}
          <a
            href="https://x.com/rushildhinoja17"
            title="Twitter"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            rushil
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
