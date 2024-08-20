/* eslint-disable no-unused-vars */
import useEmblaCarousel, {
  type UseEmblaCarouselType
} from "embla-carousel-react"
import * as React from "react"

import { cn } from "@/lib/utils"

type EmblaCarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: EmblaCarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <EmblaCarousel />")
  }

  return context
}

const EmblaCarousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: EmblaCarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        }}>
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}>
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
EmblaCarousel.displayName = "EmblaCarousel"

const EmblaCarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
EmblaCarouselContent.displayName = "EmblaCarouselContent"

const EmblaCarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
EmblaCarouselItem.displayName = "EmblaCarouselItem"

// const EmblaCarouselPrevious = React.forwardRef<
//     HTMLButtonElement,
//     React.ComponentProps<typeof Button>
// >(({ className, ...props }) => {
//     const { orientation, scrollPrev, canScrollPrev } = useCarousel()

//     return (
//         <Button
//             className={cn(
//                 "absolute  h-8 w-8 rounded-full",
//                 orientation === "horizontal"
//                     ? "-left-12 top-1/2 -translate-y-1/2"
//                     : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
//                 className
//             )}
//             disabled={!canScrollPrev}
//             onClick={scrollPrev}
//             {...props}
//         >
//             <ArrowLeft className="h-4 w-4" />
//             <span className="sr-only">Previous slide</span>
//         </Button>
//     )
// })
// EmblaCarouselPrevious.displayName = "EmblaCarouselPrevious"

// const EmblaCarouselNext = React.forwardRef<
//     HTMLButtonElement,
//     React.ComponentProps<typeof Button>
// >(({ className, ...props }) => {
//     const { orientation, scrollNext, canScrollNext } = useCarousel()

//     return (
//         <Button
//             className={cn(
//                 "absolute h-8 w-8 rounded-full",
//                 orientation === "horizontal"
//                     ? "-right-12 top-1/2 -translate-y-1/2"
//                     : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
//                 className
//             )}
//             disabled={!canScrollNext}
//             onClick={scrollNext}
//             {...props}
//         >
//             <ArrowRight className="h-4 w-4" />
//             <span className="sr-only">Next slide</span>
//         </Button>
//     )
// })
// EmblaCarouselNext.displayName = "EmblaCarouselNext"

export {
  type EmblaCarouselApi,
  EmblaCarousel,
  EmblaCarouselContent,
  EmblaCarouselItem
  // EmblaCarouselPrevious,
  // EmblaCarouselNext,
}
