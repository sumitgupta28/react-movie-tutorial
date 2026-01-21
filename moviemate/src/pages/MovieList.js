import Card from "../components/Card"

export default function MovieList({ searchType }) {
    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap other:justify-evenly">

                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
        </main>

    )
}
