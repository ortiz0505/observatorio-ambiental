import React from 'react';

const solicitudesreportes = () => {
  return(
    <div class="text-gray-900 bg-gray-200">
        <div class="p-4 flex">
            <h1 class="text-3xl">
                Solicitudes
            </h1>
        </div>
        <div class="px-3 py-4 flex justify-center">
            <table class="w-full text-md bg-white shadow-md rounded mb-4">
                <tbody>
                    <tr class="border-b">
                        <th class="text-left p-3 px-5">Descripcion</th>
                        <th class="text-left p-3 px-5">aprobar/noaprobar</th>
                    </tr>
                    <tr class="border-b hover:bg-orange-100 bg-gray-100">
                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent" /></td>
                        <td class="p-3 px-5 flex justify-start"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                    </tr>
                    <tr class="border-b hover:bg-orange-100 bg-gray-100">
                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent" /></td>
                        <td class="p-3 px-5 flex justify-start"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                    </tr>
                    <tr class="border-b hover:bg-orange-100 bg-gray-100">
                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent" /></td>
                        <td class="p-3 px-5 flex justify-start"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                    </tr>
                    <tr class="border-b hover:bg-orange-100 bg-gray-100">
                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent" /></td>
                        <td class="p-3 px-5 flex justify-start"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default solicitudesreportes;
