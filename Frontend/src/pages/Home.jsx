import ListPost from "../components/ListPost";

const Home = () => {
    return (
        <main>
            <div className="container">
                <h2 className="title-page">Lista Requerimientos</h2>
            </div>

            <div>
                <ListPost />
            </div>
        </main>
    );
};

export default Home;
