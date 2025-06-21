const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    reciepient : {
        type: String,
    },
    title: {
        type: String,
    },
    message: {
        type: String,
    },
    type: {
        type: String,
    },
    isRead: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    metadata: {
        type: Object,
        default: {},
    },
    goalDetails: {
        type: Object,
        default: {}, 
    },
    objectiveDetails : {
        type: Object,
        default: {},
    }
}, {
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    },
});

NotificationSchema.virtual('user', {
    ref: 'User',
    localField: 'userId',
    foreignField: 'id',
    justOne: true,
    options: {
        select: 'username department role',
    },
});

module.exports = mongoose.model('Notification', NotificationSchema);