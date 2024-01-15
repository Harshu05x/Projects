import Card from './Card';

function Tours({tours,removeTour,addTour}){
    return(
        <div className="container">
            <div>
                <h2 className='title'> Plan with Love</h2>
            </div>
            <div className='cards'>
                {
                    tours.map((tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour} addTour={addTour}></Card> 
                    })
                }
            </div>
        </div>
    )
}

export default Tours;
