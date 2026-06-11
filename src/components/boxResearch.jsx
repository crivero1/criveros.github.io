// import SquareIcon from 'mui/icons-material/Square';

function parserObj(text){
    if (typeof text != 'string'){
      return (
        <>
          {text.map(line => (
              <p className="text-left text-body">
                  {line}
              </p>
          ))}
        </>
      )
    } else {
      return text
    }
}

function listToP(listToParse){
    // const listToParse = text.split(";");
    // console.log(listToParse);
    return (
        <>
        {listToParse.map((line, index) => (
            <div className="text-left text-body my-1">
                {objToParser(line, index)}
            </div>
        ))}
        </>
    )
}

// function objToParser(objToParse){
//     const listOfKeys = (Object.keys(objToParse));
//     return (
//         <>
//           {listOfKeys.map(key => (
//               <div className="text-left text-body my-1">
//                   {parserObj(objToParse[key])}
//               </div>
//           ))}
//         </>
//     )
// }

function objToParser(objToParse, index){
    return (
        <>
          <div className="text-left text-body my-2">
            {/* <p>
              {index +1 }. {objToParse["author"]}
            </p> */}
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 10" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z" clipRule="evenodd" />
              </svg>
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M160 96L480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160C96 124.7 124.7 96 160 96z"/>
              </svg> */}
              {/* <SquareIcon></SquareIcon> */}
              {objToParse["author"]}
            </div>
            <p className="pl-4">
              <span className="italic">{objToParse["title"]}</span>. {objToParse["journal"]}, {objToParse["year"]}
            </p>
          </div>
        </>
    )
}

export default function BoxResearch( {obj, link, color, border_shape} ) {
  // console.log(obj)
  return (
    <div className={`m-2 bg-neutral-primary-soft flex flex-col p-5 border border-transparent content-around justify-start content-between ${color} ${border_shape}`}>
      <div className="pb-2 text-2xl text-left font-medium text-gray-600">
        {obj["title"]}
      </div>
      {/* <div className="text-left text-body my-3">
        {obj['description']}
      </div> */}
      <div className=''>
        {listToP(obj['important-work'])}
        {/* {objToP(obj['important-work'])} */}
      </div>
      <div className='text-justify mt-2 flex-1'>
        {obj['description']}
      </div>
      <a href={link} className='mt-2 text-right font-light'>
        More
      </a>
    </div>
  )
}
