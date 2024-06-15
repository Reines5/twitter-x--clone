import {NavLink} from "react-router-dom";
import classNames from "classnames";

export default function Menu() {
    return (
        <nav className="mt-0.5 mb-1">
            <NavLink to="/" className="py-1 block group">
                {({isActive}) => (
                    <div
                        className={classNames("p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors", {
                            "font-bold": isActive
                        })}>
                        {!isActive && (
                            <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
                                <path
                                    fill="#e7e9ea"
                                    d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.639c.51 0 .928-.41.928-.913V7.904c0-.301-.158-.584-.408-.758zM20 20l-4.5.01.011-7.097c0-.502-.418-.913-.928-.913H9.44c-.511 0-.929.41-.929.913L8.5 20H4V8.773l8.011-5.342L20 8.764z"/>
                            </svg>
                        )}

                        {isActive && (
                            <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
                                <path
                                    fill="#e7e9ea"
                                    d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"/>
                            </svg>
                        )}
                        <div className="pr-4 text-xl">
                            Anasayfa
                        </div>
                    </div>
                )}
            </NavLink>

            <NavLink to="/explore" className="py-1 block group">
                {({isActive}) => (
                    <div
                        className={classNames("p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors", {
                            "font-bold": isActive
                        })}>
                        {!isActive && (
                            <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
                                <path
                                    fill="#e7e9ea"
                                    d="M 10.25 3.75 c -3.59 0 -6.5 2.91 -6.5 6.5 s 2.91 6.5 6.5 6.5 c 1.795 0 3.419 -0.726 4.596 -1.904 c 1.178 -1.177 1.904 -2.801 1.904 -4.596 c 0 -3.59 -2.91 -6.5 -6.5 -6.5 Z m -8.5 6.5 c 0 -4.694 3.806 -8.5 8.5 -8.5 s 8.5 3.806 8.5 8.5 c 0 1.986 -0.682 3.815 -1.824 5.262 l 4.781 4.781 l -1.414 1.414 l -4.781 -4.781 c -1.447 1.142 -3.276 1.824 -5.262 1.824 c -4.694 0 -8.5 -3.806 -8.5 -8.5 Z"/>
                            </svg>
                        )}

                        {isActive && (
                            <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
                                <path
                                    fill="#e7e9ea"
                                    d="M 10.25 4.25 c -3.314 0 -6 2.686 -6 6 s 2.686 6 6 6 c 1.657 0 3.155 -0.67 4.243 -1.757 c 1.087 -1.088 1.757 -2.586 1.757 -4.243 c 0 -3.314 -2.686 -6 -6 -6 Z m -9 6 c 0 -4.971 4.029 -9 9 -9 s 9 4.029 9 9 c 0 1.943 -0.617 3.744 -1.664 5.215 l 4.475 4.474 l -2.122 2.122 l -4.474 -4.475 c -1.471 1.047 -3.272 1.664 -5.215 1.664 c -4.971 0 -9 -4.029 -9 -9 Z"/>
                            </svg>
                        )}
                        <div className="pr-4 text-xl">
                            Keşfet
                        </div>
                    </div>
                )}
            </NavLink>
        </nav>
    )
}