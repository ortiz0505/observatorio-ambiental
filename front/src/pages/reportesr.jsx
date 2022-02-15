import React from 'react';

const reportesr = () => {
  return (
    <div class="text-gray-900 bg-gray-200">
        <div class="p-4 flex">
            <h1 class="text-3xl">
                Mis reportes
            </h1>
        </div>
        <div class="px-3 py-4 flex justify-center">
            <table class="w-full text-md bg-white shadow-md rounded mb-4">
                <tbody>
                    <tr class="border-b">
                        <th class="text-left p-3 px-5">Descripcion</th>
                        <th class="text-left p-3 px-5">seguimiento</th>
                    </tr>
                    <tr class="border-b hover:bg-orange-100 bg-gray-100">
                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent" /></td>
                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent" /></td>
                    </tr>
                    <tr class="border-b hover:bg-orange-100 bg-gray-100">
                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent" /></td>
                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent" /></td>
                    </tr>
                    <tr class="border-b hover:bg-orange-100 bg-gray-100">
                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent" /></td>
                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent" /></td>
                    </tr>
                    <tr class="border-b hover:bg-orange-100 bg-gray-100">
                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent" /></td>
                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default reportesr;
