# TypeScript-এর কিছু গুরুত্বপূর্ণ বিষয়


আজকে TypeScript-এর কয়েকটি গুরুত্বপূর্ণ বিষয় নিয়ে আলোচনা করবো। একটি keyof
অন্যটি Intersection এবং Union।

## ১. keyof
TypeScript-এর keyof মূলত একটি অবজেক্টের সব কী-এর union টাইপ তৈরি করতে
ব্যবহার হয়। এটি টাইপ-সেইফ কোড লিখতে কাজে লাগে বিশেষ করে যখন অবজেক্টের
প্রপার্টি ডাইনামিকভাবে অ্যাক্সেস করতে হয়।

### উদাহরণ:

``` ts
type User = {   name: string;   age: number; };
type UserKeys = keyof User;  // "name" | "age"

function getValue(obj: User, key: UserKeys) {
   return obj[key];
}

getValue({ name: "Rahim", age: 25 }, "name");
```

এখানে keyof User আমাদের "name" \| "age" নামে একটি union টাইপ তৈরি করে।

------------------------------------------------------------------------

## ২. Union Type

Union টাইপ ব্যবহার হয় যখন কোনো ভ্যারিয়েবলে একাধিক টাইপ ব্যবহার করতে
হয়। এবং তাদের মধ্যে যেকোনো একটি টাইপ অনুসরণ করে কোড লিখা যায়।

``` ts
let id: string | number;
id = "ABC123";
id = 100;
```

------------------------------------------------------------------------

## ৩. Intersection Type

Intersection টাইপ ব্যবহার হয় যখন একাধিক টাইপ মিলিয়ে একটি টাইপ তৈরি
করতে হয়।

``` ts
type Person = { name: string };
type Employee = { employeeId: number };

const staff: Person & Employee = {
   name: "Karim",
   employeeId: 123
};
```
