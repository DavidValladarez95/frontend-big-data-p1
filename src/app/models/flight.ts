export class Flight {

    _id: String | undefined;

    Year: Number | undefined ;
    Month: Number | undefined;
    DayofMonth: Number | undefined;
    DayOfWeek: Number | undefined;
    DepTime: Number | undefined;
    CrsDepTime: Number | undefined ;
    ArrTime: Number | undefined;
    CRSArrTime: Number | undefined;
    UniqueCarrier: String | undefined;
    UlightNum: Number | undefined ;
    TailNum: String | undefined;
    ActualElapsedTime: Number | undefined;
    CRSElapsedTime: Number | undefined;
    AirTime: Number | undefined ;
    ArrDelay: Number | undefined ;
    DepDelay: Number | undefined ;
    Origin: String | undefined ;
    Dest: String | undefined ;
    Distance: Number | undefined ;
    TaxiIn: Number | undefined ;
    TaxiOut: Number | undefined;
    Cancelled: Number | undefined ;
    CancellationCode: String | undefined;
    Diverted: Number | undefined ;
    CarrierDelay: Number | undefined ;
    WeatherDelay: Number | undefined;
    NASDelay: Number | undefined ;
    SecurityDelay: Number | undefined;
    LateAircraftDelay: Number | undefined; 


    constructor(){
        
    }


}
