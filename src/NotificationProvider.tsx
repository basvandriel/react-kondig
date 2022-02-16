import React from "react";
import { Component, ReactNode } from "react";
import useKondig from "./useKondig";
import useNotificationStore from "./useNotificationStore";

// export default class NotificationProvider extends Component<{
//     queue: string[]
// }> {
//     render() {
//         // This doesn't need to be in the library
//         // It's headless.
//         return (
//             <div className='absolute bottom-0 mb-8 space-y-3'>
//             {
//                 this.props.queue.map((v, i) => (
//                     <div key={i}>{v}</div>
//                 ))
//             }
//             </div>
//         )
//     }
// }

const NotificationProvider = () => {
    const queue = useNotificationStore(state => state.q)

    return (
        <>
            {queue.map((v, i) => <span key={i}>{v}</span>)}
        </>
    )
}

export default NotificationProvider