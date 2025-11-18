const formatValue = (value: string | number | boolean): string | number | boolean => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        return !value

    }
}


const getLength = (value: string | any[]): number => {
    if (typeof value === "string") {
        return value.length;
    }
    else if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
}


class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}

type Item = {
    title: string;
    rating: number
}
const filterByRating = (items: Item[]): Item[] => {

    items.forEach(item => {
        if (item.rating < 0 || item.rating > 5) {
            throw new Error('rating number must be between 0 and 5 ')
        }
    })

    const mostRatedBooks = items.filter(item => item.rating >= 4)
    return mostRatedBooks
}


type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

const filterActiveUsers = (users: User[]): User[] => {
    const activeUsers = users.filter(user => user.isActive === true)
    return activeUsers

}


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book: Book): string => {
    return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? 'Yes' : 'No'}`
}


type ArrayType = string | number

const getUniqueValues = (arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] => {
    let uniqArr: ArrayType[] = []

    for (let valueArr1 of arr1) {
        let isValid = false
        for (let i = 0; i < uniqArr.length; i++) {
            if (uniqArr[i] == valueArr1) {
                isValid = true
            }
        }
        if (!isValid) {
            uniqArr[uniqArr.length] = valueArr1
        }
    }

    for (let valueArr2 of arr2) {
        let isValid = false

        for (let i = 0; i < uniqArr.length; i++) {
            if (uniqArr[i] == valueArr2) {
                isValid = true
            }
        }
        if (!isValid) {
            uniqArr[uniqArr.length] = valueArr2
        }
    }

    return uniqArr

}


type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

const calculateTotalPrice = (productArr: Product[]): number => {
    let totalPrice = 0
    productArr.forEach(product => {
        const productPrice = product.price * product.quantity
        if (product.discount !== undefined) {
            totalPrice += productPrice - (productPrice * product.discount / 100);
        }
        else {
            totalPrice += productPrice
        }
    })
    return totalPrice
}
