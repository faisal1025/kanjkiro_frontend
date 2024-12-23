
import {Suspense} from "react";
import {getStudents} from '../services/student'
import ShowStudentTable from '../components/showStudentTable'
import Loading from "./loading";
import SearchComponent from "@/components/searchComponent";
import Pagination from "@/components/pagination";

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  
  const result = await getStudents(query.toString(), currentPage.toString()) 
  const {data, pagination} = result;

  return (
    <div>
      <h1 className="text-center text-3xl font-mono font-semibold">RajkiyaKrit GOVT Secondary School Kanjkiro</h1>
      <h4 className="text-center text-xl font-serif font-medium">UDISE Code: 20130605601</h4>
      <div className="flex justify-end flex-row">
        <SearchComponent />
      </div>
      <div>
        <Suspense fallback={<Loading />}>
          {
            data.length > 0 ? <ShowStudentTable data={data}  /> : <div className="flex justify-center items-center m-20">
              <h2 className="text-4xl font-semibold">No Data Found</h2>
            </div>
          }
        </Suspense>
      </div>
      {
          pagination.pageCount > 1 
              && (
                  <Suspense>
                      <div className='flex justify-center mt-12'>
                          <Pagination pagination={pagination} />
                      </div>
                  </Suspense>
              )
      }
    </div>
  );
}
