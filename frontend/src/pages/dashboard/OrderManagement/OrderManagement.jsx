import React from 'react'; 
import { Link } from 'react-router-dom';

const orders = [
    {
        id: '67dfbc851bf84aed3d474193',
        name: 'Trần Hoàng Quý',
        email: 'quythce170230@fpt.edu.vn',
        phone: '0869852848',
        totalPrice: 198000,
        address: 'Khu dân cư Hồng Loan, Cái Răng, Cần Thơ',
        productIds: ['67dfbc011bf84aed3d47418e'],
    },
    {
        id: '67dfbc861bf84aed3d474194',
        name: 'Nguyễn Hoàng Nam',
        email: 'hoangnamnguyen@gmail.com',
        phone: '0901234567',
        totalPrice: 99000,
        address: 'Khu đô thị Nam Long, Cái Răng, Cần Thơ',
        productIds: ['67dfbc021bf84aed3d474195'],
    },
    {
        id: '67dfbc871bf84aed3d474196',
        name: 'Lê Thị Hồng Nhung',
        email: 'hongnhungle@gmail.com',
        phone: '0912345678',
        totalPrice: 198000,
        address: 'Phường An Bình, Ninh Kiều, Cần Thơ',
        productIds: ['67dfbc031bf84aed3d474197'],
    },
    {
        id: '67dfbc881bf84aed3d474198',
        name: 'Trần Minh Khoa',
        email: 'minhkhoatran@gmail.com',
        phone: '0923456789',
        totalPrice: 99000,
        address: 'Phường Xuân Khánh, Ninh Kiều, Cần Thơ',
        productIds: ['67dfbc041bf84aed3d474199'],
    },
    {
        id: '67dfbc891bf84aed3d474200',
        name: 'Phạm Duy Tân',
        email: 'duytanpham@gmail.com',
        phone: '0934567890',
        totalPrice: 99000,
        address: 'Phường Hưng Lợi, Ninh Kiều, Cần Thơ',
        productIds: ['67dfbc051bf84aed3d474201'],
    },
    {
        id: '67dfbc901bf84aed3d474202',
        name: 'Võ Thanh Tú',
        email: 'thanhtuvo@gmail.com',
        phone: '0945678901',
        totalPrice: 99000,
        address: 'Phường Hưng Phú, Cái Răng, Cần Thơ',
        productIds: ['67dfbc061bf84aed3d474203'],
    },
    {
        id: '67dfbc911bf84aed3d474204',
        name: 'Đặng Thùy Linh',
        email: 'thuylinhdang@gmail.com',
        phone: '0956789012',
        totalPrice: 99000,
        address: 'Phường An Hòa, Ninh Kiều, Cần Thơ',
        productIds: ['67dfbc071bf84aed3d474205'],
    },
    {
        id: '67dfbc921bf84aed3d474206',
        name: 'Ngô Bảo Long',
        email: 'baolongngo@gmail.com',
        phone: '0967890123',
        totalPrice: 99000,
        address: 'Phường An Khánh, Ninh Kiều, Cần Thơ',
        productIds: ['67dfbc081bf84aed3d474207'],
    },
    {
        id: '67dfbc931bf84aed3d474208',
        name: 'Bùi Minh Huy',
        email: 'minhhuybui@gmail.com',
        phone: '0978901234',
        totalPrice: 99000,
        address: 'Phường An Nghiệp, Ninh Kiều, Cần Thơ',
        productIds: ['67dfbc091bf84aed3d474209'],
    },
    {
        id: '67dfbc941bf84aed3d474210',
        name: 'Phan Gia Bảo',
        email: 'giabaophan@gmail.com',
        phone: '0989012345',
        totalPrice: 99000,
        address: 'Phường Thới Bình, Ninh Kiều, Cần Thơ',
        productIds: ['67dfbc101bf84aed3d474211'],
    },
    {
        id: '67dfbc941bf84aed3d474211',
        name: 'Vương Gia Lương',
        email: 'vuonggialuong@gmail.com',
        phone: '0989012334',
        totalPrice: 99000,
        address: 'Phường Long Hoà, Ninh Kiều, Cần Thơ',
        productIds: ['67dfbc101bf84aed3d474211'],
    }

];

const OrderManagement = () => {
    return (
        <section className="py-1 bg-blueGray-50">
            <div className="w-full xl:w-10/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap items-center">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                <h3 className="font-semibold text-base text-blueGray-700">Order Management</h3>
                            </div>
                        </div>
                    </div>

                    <div className="block w-full overflow-x-auto">
                        <table className="items-center bg-transparent w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-xs uppercase border border-solid border-blueGray-100 text-left">#</th>
                                    <th className="px-6 py-3 text-xs uppercase border border-solid border-blueGray-100 text-left">Order ID</th>
                                    <th className="px-6 py-3 text-xs uppercase border border-solid border-blueGray-100 text-left">Name</th>
                                    <th className="px-6 py-3 text-xs uppercase border border-solid border-blueGray-100 text-left">Email</th>
                                    <th className="px-6 py-3 text-xs uppercase border border-solid border-blueGray-100 text-left">Total Price</th>
                                    <th className="px-6 py-3 text-xs uppercase border border-solid border-blueGray-100 text-left">Address</th>
                                    <th className="px-6 py-3 text-xs uppercase border border-solid border-blueGray-100 text-left">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {orders.map((order, index) => (
                                    <tr key={order.id}>
                                        <td className="px-6 py-4 border-t-0 border-l-0 border-r-0 text-xs text-left">{index + 1}</td>
                                        <td className="px-6 py-4 border-t-0 border-l-0 border-r-0 text-xs">{order.id}</td>
                                        <td className="px-6 py-4 border-t-0 border-l-0 border-r-0 text-xs">{order.name}</td>
                                        <td className="px-6 py-4 border-t-0 border-l-0 border-r-0 text-xs">{order.email}</td>
                                        <td className="px-6 py-4 border-t-0 border-l-0 border-r-0 text-xs">{order.totalPrice} VNĐ</td>
                                        <td className="px-6 py-4 border-t-0 border-l-0 border-r-0 text-xs">{order.address}</td>
                                        <td className="px-6 py-4 border-t-0 border-l-0 border-r-0 text-xs">
                                            <button className="bg-green-500 py-1 px-4 rounded-full text-white mr-2">Đã xác nhận</button>
                                            <button className="bg-red-500 py-1 px-4 rounded-full text-white">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderManagement;
