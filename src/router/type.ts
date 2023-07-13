import {ReactElement} from "react";

interface RouteConfig {
    path: string
    element: ReactElement
    index?: boolean
    children?: Array<RouteConfig>
}

export default RouteConfig