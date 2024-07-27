import Year from './year';

export class Holiday {
  public name: string;
  public getter: (year: number) => Date;
  public firstObservance: number;

  public constructor(name: string, getter: (year: number) => Date, firstObservance) {
    this.name = name;
    this.getter = getter;
    this.firstObservance = firstObservance;
  }
}

export class Holidays {
  public static newYearsDay = new Holiday("New Year's Day", (year: number) => new Year(year).newYearsDay, 1871);
  public static martinLutherKingJrDay = new Holiday(
    'Martin Luther King Jr. Day',
    (year: number) => new Year(year).martinLutherKingJrDay,
    1998,
  );
  public static washingtonsBirthday = new Holiday(
    "Washington's Birthday",
    (year: number) => new Year(year).washingtonsBirthday,
    1885,
  );
  public static goodFriday = new Holiday('Good Friday', (year: number) => new Year(year).goodFriday, 1920);
  public static memorialDay = new Holiday('Memorial Day', (year: number) => new Year(year).memorialDay, 1971);
  public static juneteenthNationalIndependenceDay = new Holiday(
    'Juneteenth National Independence Day',
    (year: number) => new Year(year).juneteenthNationalIndependenceDay,
    2021,
  );
  public static independenceDay = new Holiday(
    'Independence Day',
    (year: number) => new Year(year).independenceDay,
    1870,
  );
  public static laborDay = new Holiday('Labor Day', (year: number) => new Year(year).laborDay, 1894);
  public static columbusDay = new Holiday('Columbus Day', (year: number) => new Year(year).columbusDay, 1937);
  public static veteransDay = new Holiday('Veterans Day', (year: number) => new Year(year).veteransDay, 1954);
  public static thanksgivingDay = new Holiday(
    'Thanksgiving Day',
    (year: number) => new Year(year).thanksgivingDay,
    1941,
  );
  public static christmasDay = new Holiday('Christmas Day', (year: number) => new Year(year).christmasDay, 1870);

  public static all = [
    Holidays.newYearsDay,
    Holidays.martinLutherKingJrDay,
    Holidays.washingtonsBirthday,
    Holidays.goodFriday,
    Holidays.memorialDay,
    Holidays.juneteenthNationalIndependenceDay,
    Holidays.independenceDay,
    Holidays.laborDay,
    Holidays.columbusDay,
    Holidays.veteransDay,
    Holidays.thanksgivingDay,
    Holidays.christmasDay,
  ];

  public static getHoliday(name: string): Holiday | undefined {
    return Holidays.all.find((holiday) => holiday.name === name);
  }
}
