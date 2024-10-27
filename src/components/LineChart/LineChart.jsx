import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const subjectsData = [
        { "id": 1, "name": "Student 1", "math": 78, "physics": 82, "chemistry": 75 },
        { "id": 2, "name": "Student 2", "math": 85, "physics": 89, "chemistry": 80 },
        { "id": 3, "name": "Student 3", "math": 92, "physics": 94, "chemistry": 88 },
        { "id": 4, "name": "Student 4", "math": 68, "physics": 70, "chemistry": 65 },
        { "id": 5, "name": "Student 5", "math": 74, "physics": 76, "chemistry": 78 },
        { "id": 6, "name": "Student 6", "math": 88, "physics": 85, "chemistry": 90 },
        { "id": 7, "name": "Student 7", "math": 95, "physics": 91, "chemistry": 93 },
        { "id": 8, "name": "Student 8", "math": 81, "physics": 84, "chemistry": 79 },
        { "id": 9, "name": "Student 9", "math": 77, "physics": 80, "chemistry": 73 },
        { "id": 10, "name": "Student 10", "math": 90, "physics": 87, "chemistry": 85 }
      ]
      

    return (
        <div>
                <LChart width={800} height={700} data={subjectsData}>
                    <XAxis></XAxis>
                    <YAxis></YAxis>
                        <Line dataKey="math" stroke='red'></Line>
                        <Line dataKey="physics" stroke='yellow'></Line>
                </LChart>
        </div>
    );
};

export default LineChart;