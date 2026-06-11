// import {dblpLogo} from "../../public/dbpl.png";
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import LinkedInLogo from '../assets/linkedin';

function parser(text){
    if (typeof text != 'string'){
      return (
        <>
          {text.map(line => (
              <p className="text-justify text-body">
                  {line}
              </p>
          ))}
        </>
      )
    } else {
      return text
    }
}

// function listToP(listToParse){
//     // const listToParse = text.split(";");
//     // console.log(listToParse);
//     return (
//         <>
//         {listToParse.map(line => (
//             <div className="text-left text-body my-3">
//                 {parser(line)}
//             </div>
//         ))}
//         </>
//     )
// }

function objToP(objToParse){
    const listOfKeys = (Object.keys(objToParse));
    return (
        <>
          {listOfKeys.map(key => (
              <div className="text-justify text-body my-3">
                  {parser(objToParse[key])}
              </div>
          ))}
        </>
    )
}

function links(link, links_list) {
  // console.log(link, links_list)
  if (link) {
    return(
      <>
      <div>
        {/* <a href={links_list["dblp-link"]} className='mt-2 text-right font-light'>
          <img width="24" height="24" src={dblpLogo} alt="external-dblp-an-online-reference-for-open-bibliographic-information-on-computer-science-journals-logo-filled-tal-revivo"/>
        </a> */}
        {/* <a href={link["dblp-link"]} className='mt-2 text-right font-light'>
          <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/external-dblp-an-online-reference-for-open-bibliographic-information-on-computer-science-journals-logo-filled-tal-revivo.png" alt="external-dblp-an-online-reference-for-open-bibliographic-information-on-computer-science-journals-logo-filled-tal-revivo"/>
        </a> */}
        {/* <a href={links_list["linkedin-link"]} className='mt-2 text-right font-light'>
          <img src={LinkedInLogo} className="" alt="LinkedIn logo" />
        </a> */}
      </div>
      </>
    )
  }
}

export default function Box( {title, list, link, color, border_shape} ) {
  return (
    // <div class="block p-6 items-center border rounded-lg">
    //   <div class="">
    //     <button>
    //       Boton
    //     </button>
    //     <p>Texto</p>
    //   </div>
    //   <div>
    //     <button>
    //       Boton abajo
    //     </button>
    //   </div>
    // </div>
    // <div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium">
    // <div className={`m-2 bg-neutral-primary-soft flex flex-col p-8 border border-gray-100 content-around justify-start content-between ${color} ${border_shape}`}>
    <div className={`m-2 bg-neutral-primary-soft flex flex-col p-5 border border-transparent content-around justify-start content-between ${color} ${border_shape}`}>
      {/* <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">Noteworthy technology acquisitions 2021</h5> */}
      <div className="pb-2 text-2xl text-left font-medium text-gray-600">
        {title}
      </div>
      <div className='flex-1'>
        {/* {listToP(list)} */}
        {objToP(list)}
      </div>
      {/* <a href={link} className='mt-2 text-right font-light'>
        More
      </a> */}
      {/* {links(link, link)} */}
    </div>
  )
}
