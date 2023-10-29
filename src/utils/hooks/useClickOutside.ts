import { MutableRefObject } from "react"
import { useEventListener } from "./useEventListener"

type Handler = (event: MouseEvent) => void

function useClickOutside<T extends HTMLElement = HTMLElement>(
    ref: MutableRefObject<T | null>,
    handler: Handler,
    mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'
): void {
    useEventListener(mouseEvent, event => {
        const el = ref?.current

        if (!el || el.contains(event.target as Node)) return

        handler(event)
    })
}

export default useClickOutside