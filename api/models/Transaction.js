const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema(
    {
        sender: {
            type: String,
            require: true
        },
        receiver: {
            type: String,
            require: true
        },
        contractAddress: {
            type: String,
            require: true
        },
        amount: {
            type: String,
            require: true
        },
        nonce: {
            type: String,
            require: true
        },
        gasLimit: {
            type: String,
            require: true
        },
        gasPrice: {
            type: String,
            require: true
        },
        txHash: {
            type: String,
            require: true       
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Transaction', TransactionSchema);