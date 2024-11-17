import ReviewComponent from "../components/header/comment";
const reviews = [
    { name: "John Doe", comment: "Your website is good.", rating: 4 },
    { name: "Jane Smith", comment: "Great service and products!", rating: 5 },
    { name: "Alice Johnson", comment: "I love shopping here.", rating: 3 },
    { name: "Michael Brown", comment: "Fast delivery and good prices.", rating: 5 },
    { name: "Linda White", comment: "Nice user interface.", rating: 4 },
    { name: "Robert Green", comment: "The product quality could be better.", rating: 2 },
    { name: "Emily Davis", comment: "Exceptional customer support!", rating: 5 },
    { name: "Paul Martinez", comment: "Product matches the description.", rating: 4 },
    { name: "Karen Taylor", comment: "Would recommend to friends.", rating: 5 },
    { name: "James Anderson", comment: "Not satisfied with the return policy.", rating: 3 },
    { name: "Jessica Wilson", comment: "Excellent shopping experience.", rating: 5 }
];

export default function Review () {

    return (
        <div className="flex justify-center items-center my-40">
              <ReviewComponent reviews={reviews} />

        </div>
    )

}