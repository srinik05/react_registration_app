import Footers from "../components/Footers";
import Header from "../components/Header";

function MainLayout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footers />
        </>
    );
}
export default MainLayout;