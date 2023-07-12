import { Sequelize, DataTypes } from 'sequelize';

const host = process.env.DB_HOST || 'localhost'
const port = process.env.DB_PORT || 3306
const user = process.env.DB_USER || 'bank'
const password = process.env.DB_PASSWORD || 'secret'
const database = process.env.DB_DATABASE || 'bank'
const dbType = process.env.DB_TYPE || 'mysql'

console.log(`Connecting to db ${user}@${host}:${port}...`)

const sequelize = new Sequelize(
  `${dbType}://${user}:${password}@${host}:${port}/${database}`,
)

console.log('Connected!')

export const Transaction = sequelize.define('transaction', {
  accountId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  account_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  transaction_type: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})

export const init = async () => {
  await Transaction.sync()

  let count = await Transaction.count();

  if (count === 0) {
    console.log('No transactions found, creating default transactions...')
    await Transaction.bulkCreate(defaultTransactions)
  }
}


const defaultTransactions = [
  {
    accountId: 1,
    date: '2022-12-01',
    description: 'Online purchase',
    amount: -50.0,
    account_type: 'Checking',
    transaction_type: 'Debit'
  },
  {
    accountId: 1,
    date: '2022-12-03',
    description: 'Direct deposit from employer',
    amount: 2000.0,
    account_type: 'Checking',
    transaction_type: 'Credit'
  },
  {
    accountId: 1,
    date: '2022-12-05',
    description: 'ATM withdrawal',
    amount: -100.0,
    account_type: 'Checking',
    transaction_type: 'Debit'
  },
  {
    accountId: 1,
    date: '2022-12-07',
    description: 'Transfer to savings account',
    amount: -500.0,
    account_type: 'Checking',
    transaction_type: 'Debit'
  },
  {
    accountId: 1,
    date: '2022-12-10',
    description: 'Auto-payment for car loan',
    amount: -250.0,
    account_type: 'Checking',
    transaction_type: 'Debit'
  },
  {
    accountId: 1,
    date: '2022-12-12',
    description: 'Online purchase',
    amount: -50.0,
    account_type: 'Checking',
    transaction_type: 'Debit'
  },
];
