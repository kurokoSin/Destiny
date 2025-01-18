export function DayOfWeek(DayName: string) {
  /* 土  <span className="text-blue-700 bg-blue-100">土</span> */
  /* 日  <span className="text-red-700 bg-red-100">日</span> */

  switch(DayName) {
    case "Mon": return (<><span className="">月</span></>);
    case "Tue": return (<><span className="">火</span></>);
    case "Wed": return (<><span className="">水</span></>);
    case "Thu": return (<><span className="">木</span></>);
    case "Fri": return (<><span className="">金</span></>);
    case "Sat": return (<><span className="text-blue-700 bg-blue-100">土</span></>);
    case "Sun": return (<><span className="text-red-700  bg-red-100" >日</span></>);
    default : return <></>;
  }
}