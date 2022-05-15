import StylesProvider from "./styles-config/StylesProvider";
import List from "./components/view/issues/List";
import Header from "./components/shared/Header";

export const App = () => {
    return (
        <StylesProvider>
            <Header/>
            <List/>
        </StylesProvider>
    );
}
export default App;
