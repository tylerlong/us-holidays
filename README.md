# United States Holidays

Provide utility classes to work with United States holidays.

Currently only federal holidays are supported.

## Install

```
yarn add us-holidays
```

## Usage

```ts
import { Holidays } from 'us-holidays';

const independenceDay = Holidays.independenceDay;
console.log(independenceDay.getter(2024)); // 2024-07-04
console.log(independenceDay.getter(2023)); // 2023-07-04

for (const holiday of Holidays.all) {
  // all the federal holidays
}
```

```ts
import Year from 'us-holidays/year';

const year = new Year(2024);
console.log(year.christmasDay); // 2024-12-25
console.log(year.independenceDay); // 2024-07-04
```
