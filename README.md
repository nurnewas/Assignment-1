#Interface আর Type এর পার্থক্য

TypeScript-এ interface আর type দুইটাই object এর structure বানাতে ব্যবহার হয়।
তবে interface বেশি ব্যবহার হয় class বা object এর জন্য। interface কে extend করা যায় এবং class implement করতে পারে।

আর type একটু বেশি powerful। type দিয়ে union (|) আর intersection (&) টাইপ বানানো যায়। কিন্তু type কে class implement করতে পারে না।

সহজভাবে বললে
 object / class → interface
 complex টাইপ → type

```ts
interface User {
  name: string;
}

type Admin = {
  role: string;
};
```

#any, unknown আর never
any দিলে TypeScript আর কিছু চেক করে না। যা খুশি করা যায়, তাই এটা unsafe।
unknown হলো any এর safe version। ব্যবহার করার আগে type check করতে হয়।
never এমন function এর জন্য যেগুলো কখনো কিছু return করে না, যেমন error throw করলে।

```ts
let data: unknown;
if (typeof data === "string") {
  console.log(data);
}
function errorMsg(): never {
  throw new Error("Error");
}
```

 সংক্ষেপে:
any avoid করা ভালো, unknown safe, আর never rare case এ ব্যবহার হয়।
