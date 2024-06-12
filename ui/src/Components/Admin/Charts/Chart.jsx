import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Chart from 'chart.js/auto';
const StudentChart = (props) => {
    const [barChart, setBarChart] = useState(null);
    const [pieChart, setPieChart] = useState(null);
    const [lineChart, setLineChart] = useState(null);
    const [query, setQuery] = useState([]);

    const getAllQuery = async () => {
        await fetch('http://localhost:3000/admin/getAllQuery', {
            method: 'get',
            headers: {
                'Authorization': localStorage.getItem('aJwt')
            }
        })
            .then(data => data.json())
            .then((data) => {
                if (!data.error) {
                    setQuery(data);
                    // console.log(data.length)
                }
                else {
                    toast.error(data.error);
                }
            });
    };

    const deleteQuery = async (_id) => {
        await fetch(`http://localhost:3000/admin/deleteQuery/${_id}`, {
            method: 'delete',
            headers: {
                'Authorization': localStorage.getItem('aJwt')
            }
        })
            .then(data => data.json())
            .then((data) => {
                if (!data.error) {
                    getAllQuery();
                }
                else {
                    toast.error(data.error);
                }
            });
    };

    const doSolve = async (_id) => {
        await fetch(`http://localhost:3000/admin/updateIQueryStatus`, {
            method: 'put',
            headers: {
                'Authorization': localStorage.getItem('aJwt'),
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                _id: _id
            })
        })
            .then(data => data.json())
            .then((data) => {
                if (!data.error) {
                    getAllQuery();
                    toast.success(data);
                }
                else {
                    toast.error(data.error);
                }
            });
    };

    useEffect(() => {
        getAllQuery();

        const Total = Array.isArray(props.std) ? props.std.length : 0;

        // Create or update the bar chart
        const createOrUpdateBarChart = () => {
            const barCtx = document.getElementById('barChart').getContext('2d');
            if (barChart) {
                barChart.destroy();
            }
            const barChartData = {
                labels: ['Enroll Student', 'New Student', 'New Enquiry', 'Total Offer'],
                datasets: [{
                    label: 'Totol Queries & Updates',
                    data: [Total, Total, props.Tcourse, props.TOffer],
                    backgroundColor: [
                        '#00bbf0',
                        '#38598b',
                        '#FFC300',
                        '#f96d00'
                    ],
                }]
            };
            const newBarChart = new Chart(barCtx, {
                type: 'bar',
                data: barChartData,
            });
            setBarChart(newBarChart);
        };

        // Create or update the pie chart
        const createOrUpdatePieChart = () => {
            const pieCtx = document.getElementById('pieChart').getContext('2d');
            if (pieChart) {
                pieChart.destroy();
            }
            const pieChartData = {
                labels: ['Enroll Student', 'New Student', 'New Enquiry', 'Total Offer'],
                datasets: [{
                    label: 'Updated Database',
                    data: [props.Tcourse, 5, 3, props.Tcourse],
                    backgroundColor: [
                        '#00bbf0',
                        '#38598b',
                        '#f96d00',
                        '#FFC300'
                    ],
                }]
            };
            const newPieChart = new Chart(pieCtx, {
                type: 'pie',
                data: pieChartData,
            });
            setPieChart(newPieChart);
        };

        // Create or update the line chart
        const createOrUpdateLineChart = () => {
            const lineCtx = document.getElementById('lineChart').getContext('2d');
            if (lineChart) {
                lineChart.destroy();
            }
            const lineChartData = {
                labels: ['Enroll Student', 'New Student', 'New Enquiry', 'Total Offer'],
                datasets: [{
                    label: 'Totol Query',
                    data: [Total, Total, props.Tcourse, props.TOffer],
                    fill: false,
                    borderColor: 'rgb(9, 9, 255)',
                    tension: 0.1
                }]
            };
            const newLineChart = new Chart(lineCtx, {
                type: 'line',
                data: lineChartData,
            });
            setLineChart(newLineChart);
        };

        createOrUpdateBarChart();
        createOrUpdatePieChart();
        createOrUpdateLineChart();

        // Cleanup function
        return () => {
            if (barChart) {
                barChart.destroy();
            }
            if (pieChart) {
                pieChart.destroy();
            }
            if (lineChart) {
                lineChart.destroy();
            }
        };
    }, [props.std, props.Tcourse]);

    return (
        <div className="m-auto">
            <div className="mx-0 px-0">
                <div className="row mb-5 mx-0 mb-2 pb-4 d-flex justify-content-center">
                    <div className="col-xl-4 col-xxl-3 col-sm-6 my-2 w-100">
                        <div className="card myshadow border-0" id="NotishBoard">
                            <div className="card-header h4 text-white text-start" style={{ background: "var(--cardHeadColor )" }}>
                                <div data-aos="fade-right">  <i className="fa fa-comments text-warning" aria-hidden="true"></i> NEW MESSAGE</div>
                            </div>
                            <div className="card-body fw-normal FeatureCard2 my-0 py-0">
                                <div className="table-responsive small">
                                    <table className="table table-hover table-bordered table-sm small">
                                        <thead>
                                            <tr>
                                                <th scope="col">Title</th>
                                                <th scope="col">Query</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Mobile</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Solved</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {query &&
                                                query.map((details, index) => (
                                                    <tr key={index}>
                                                        <td>{details.title}</td>
                                                        <td>{details.query}</td>
                                                        <td>{details.fullName}</td>
                                                        <td>{details.mobile}</td>
                                                        <td>{details.email}</td>
                                                        <td className='text-center'>
                                                            {details.iSolveStatus ? (
                                                                <i className="bi bi-check2-all text-primary fs-5 fw-bolder"></i>
                                                            ) : (
                                                                <button className='btn btn-success btn-sm py-0 p-1' onClick={() => { doSolve(details._id) }}>
                                                                    yes
                                                                </button>
                                                            )}
                                                        </td>
                                                        <td>{new Date(details.createdAt).toLocaleDateString('en-GB')}</td>
                                                        <td onClick={() => { deleteQuery(details._id) }} >
                                                            <button className='btn btn-danger btn-sm'>
                                                                <i className="bi bi-trash3-fill"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Bar Chart */}
                    <div className="col-xl-4 col-xxl-3 col-sm-6 my-2">
                        <div className="widget-stat myshadow2 border-0 card">
                            <div className="card-body">
                                <canvas id="barChart" width="300" height="300"></canvas>
                            </div>
                        </div>
                    </div>
                    {/* Pie Chart */}
                    <div className="col-xl-4 col-xxl-3 col-sm-6 my-2">
                        <div className="widget-stat myshadow2 border-0 card">
                            <div className="card-body">
                                <canvas id="pieChart" width="300" height="300"></canvas>
                            </div>
                        </div>
                    </div>
                    {/* Line Chart */}
                    <div className="col-xl-4 col-xxl-3 col-sm-6 my-2">
                        <div className="widget-stat myshadow2 border-0 card">
                            <div className="card-body">
                                <canvas id="lineChart" width="300" height="300"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default StudentChart;












