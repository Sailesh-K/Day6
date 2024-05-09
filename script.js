//Question 1
class Movie
{
    constructor(title,studio,rating="PG")
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    static getPG(movies) {
        return movies.filter((movie)=>movie.rating==="PG");
    }
}
const movies = [
    new Movie("The Lion King", "Disney", "G"),
    new Movie("Jumanji", "Sony Pictures", "PG"),
    new Movie("The Incredibles", "Pixar", "PG"),
    new Movie("Casino Royale", "Eon Productions", "PG-13"),
    new Movie("Die Hard", "20th Century Fox", "R"),
  ];

  const pgMovies = Movie.getPG(movies);
  pgMovies.forEach((movie) => console.log(movie.title));


  //Question 2
  class Circle
{
    constructor(radius=1.0,color="red")
    {
        this.radius=radius;
        this.color=color;
    }
    getRadius()
    {
        return this.radius;
    }
    setRadius(value)
    {
        this.radius=value;
    }
    getColor()
    {
        return this.color;
    }
    setColor(value)
    {
        this.color=value;
    }
    toString()
    {
        return `Circle[radius=${this.radius},color=${this.color}]`;
    }
    getArea()
    {
        return 3.14*this.radius*this.radius;
    }
    getCircumference()
    {
        return 2*3.14*this.radius;
    }
}


//Question 3
class Person
{
    constructor(name,age,gender,phno,add)
    {
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.phno=phno;
        this.add=add;
    }
    getDetails()
    {
        return `Name:${this.name},
        Age:${this.age},
        Gender:${this.gender},
        Phone No.:${this.phno},
        Address:${this.add}`;
    }
}


//Question 4
class Uber{
    constructor(km=1,fare=18.0)
    {
        this.km=km;
        this.fare=fare;
    }
    getTotalFare()
    {
        return km*fare;
    }
}