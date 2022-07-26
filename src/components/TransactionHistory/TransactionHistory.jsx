import {TransactionHistoryStyled, TransactionHistoryItemStyled,} from './TransactionHistory.styled.js';
import PropTypes from "prop-types";

export const TransactionHistory = ({ items }) => {
    return (
        <TransactionHistoryStyled>
        <thead>
            <TransactionHistoryItemStyled>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </TransactionHistoryItemStyled>
        </thead>
        <tbody>
            {items.map(item => (
            <TransactionHistoryItemStyled key={item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
            </TransactionHistoryItemStyled>
            ))}
        </tbody>
        </TransactionHistoryStyled>
    );
    }

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}
