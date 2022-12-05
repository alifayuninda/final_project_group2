const mongoose = require('mongoose');

// System Modal Schema
const systemsSchema = new mongoose.Schema({
	_id: Number,
	name: String,
	category: String,
    time: Number,
    timestamps: { 
        createdAt: 'created_at',
        updatedAt: 'updated_at' 
    }
});

// Employee Modal Schema
const employeeSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
	role: String,
	unit: String,
	status: {
        type: String,
        enum: ['Pending', 'Active'],
        default: 'Pending'
    },
	confirmationCode: {
        type: String,
        unique: true
    },
    timestamps: { 
        createdAt: 'created_at',
        updatedAt: 'updated_at' 
    }
});

// Attendance Modal Schema
const attendanceSchema = new mongoose.Schema({
	name: String,
	role: String,
	unit: String,
    date: date,
    time_in: Number,
    time_out: Number,
    overtime: Boolean,
    overtime_status: {
        type: String,
        enum: ['Pending', 'Approve', 'Rejected'],
        default: 'Pending'
    },
    category: {
        type: String,
        enum: ['Absen Tidak Lengkap', 'Lembur', 'Absen Lengkap', 'Terlambat', 'Absen Kosong'],
        default: 'Absen Kosong'
    },
    timestamps: { 
        createdAt: 'created_at',
        updatedAt: 'updated_at' 
    }
})

const Systems = mongoose.model('systems', systemsSchema);
const Employee = mongoose.model('employee', employeeSchema);
const Attendance = mongoose.model('attendance', attendanceSchema);

module.exports = {
	Systems, Employee, Attendance
}
