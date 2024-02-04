import { Button } from "flowbite-react";
import { Table } from 'flowbite-react';


export function UserDeshborad() {
    const date = new Date();
    const maindate = date.getMonth();
    const getFullYear = date.getFullYear();
    const getDate = date.getDate();

  return (
    <>
      <div className="bg-gray-100">
        <div className="w-10/12 py-20 mx-auto">
          <h2 className="text-xl font-semibold mb-3">
            <span className="text-blue-500">Home / User </span> / Dashboard
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 bg-white p-5 rounded">
              <img
                className="w-20 mx-auto"
                src="https://img.icons8.com/?size=256&id=kDoeg22e5jUY&format=png"
                alt=""
              />
              <h2 className="font-semibold text-center text-xl">Your Name</h2>
              <h3 className="font-semibold text-center">Address</h3>
            </div>
            <div className="col-span-2 bg-white p-5 rounded">
              <label className="block mb-2" htmlFor="">
                First Name :{" "}
                <input
                  className="border-gray-100 rounded"
                  type="text"
                  name=""
                  defaultValue={"Nimur Rahman"}
                  id=""
                />
              </label>
              <label className="block mb-2" htmlFor="">
                Last Name :{" "}
                <input
                  className="border-gray-100 rounded"
                  type="text"
                  name=""
                  defaultValue={"Nerob"}
                  id=""
                />
              </label>
              <label className="block mb-2" htmlFor="">
                Email :{" "}
                <input
                  className="border-gray-100 rounded"
                  type="text"
                  name=""
                  defaultValue={"nimurnerob404@gmail.com"}
                  id=""
                />
              </label>
              <label className="block mb-2" htmlFor="">
                Phone :{" "}
                <input
                  className="border-gray-100 rounded"
                  type="text"
                  name=""
                  defaultValue={"+88 01708784404"}
                  id=""
                />
              </label>
              <label className="block mb-2" htmlFor="">
                Address :{" "}
                <input
                  className="border-gray-100 rounded"
                  type="text"
                  name=""
                  defaultValue={"Dhaka , Bangladesh "}
                  id=""
                />
              </label>
              <Button className="">Submit</Button>
            </div>
          </div>

          <div className="overflow-x-auto mt-10">
            <Table>
              <Table.Head>
                <Table.HeadCell>Product name</Table.HeadCell> 
                <Table.HeadCell>Category</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>Date</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {'Apple MacBook Pro 17"'}
                  </Table.Cell> 
                  <Table.Cell>Laptop</Table.Cell>
                  <Table.Cell>$2999</Table.Cell>
                  <Table.Cell>{`${getDate}/${maindate}/${getFullYear}`}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
