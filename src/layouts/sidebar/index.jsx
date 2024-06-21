import Logo from "~/layouts/sidebar/logo/index.jsx";
import Menu from "~/layouts/sidebar/menu/index.jsx";
import Account from "~/layouts/sidebar/account/index.jsx";

export default function Sidebar() {
    return (
        <aside className="w-[275px] max-h-screen min-h-screen px-2 flex flex-col ">
            <Logo/>
            <Menu/>
            <Account/>
        </aside>
    )
}