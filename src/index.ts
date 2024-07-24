import Year from './year';

export class Holiday {
  public name: string;
  public getter: (year: number) => string;

  public constructor(name: string, getter: (year: number) => string) {
    this.name = name;
    this.getter = getter;
  }
}

export class Holidays {
  public static newYearsDay = new Holiday("New Year's Day", (year: number) => new Year(year).newYearsDay);
  public static martinLutherKingJrDay = new Holiday(
    'Martin Luther King Jr. Day',
    (year: number) => new Year(year).martinLutherKingJrDay,
  );
  public static washingtonsBirthday = new Holiday(
    "Washington's Birthday",
    (year: number) => new Year(year).washingtonsBirthday,
  );
  public static memorialDay = new Holiday('Memorial Day', (year: number) => new Year(year).memorialDay);
  public static juneteenthNationalIndependenceDay = new Holiday(
    'Juneteenth National Independence Day',
    (year: number) => new Year(year).juneteenthNationalIndependenceDay,
  );
  public static independenceDay = new Holiday('Independence Day', (year: number) => new Year(year).independenceDay);
  public static laborDay = new Holiday('Labor Day', (year: number) => new Year(year).laborDay);
  public static columbusDay = new Holiday('Columbus Day', (year: number) => new Year(year).columbusDay);
  public static veteransDay = new Holiday('Veterans Day', (year: number) => new Year(year).veteransDay);
  public static thanksgivingDay = new Holiday('Thanksgiving Day', (year: number) => new Year(year).thanksgivingDay);
  public static christmasDay = new Holiday('Christmas Day', (year: number) => new Year(year).christmasDay);

  public static all = [
    Holidays.newYearsDay,
    Holidays.martinLutherKingJrDay,
    Holidays.washingtonsBirthday,
    Holidays.memorialDay,
    Holidays.juneteenthNationalIndependenceDay,
    Holidays.independenceDay,
    Holidays.laborDay,
    Holidays.columbusDay,
    Holidays.veteransDay,
    Holidays.thanksgivingDay,
    Holidays.christmasDay,
  ];
}
