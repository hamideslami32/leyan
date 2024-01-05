import classNames from 'classnames';
import styles from './style.module.css';
// import dayjs from '@/utils/dayjs';

interface TableProps {
  caption?: string;
  data: any[];
  headers: string[];
}

const Table = (props: TableProps) => {
  const { caption, data, headers } = props;

  return (
    <div className='max-w-full overflow-x-auto'>
      <table className={classNames('w-full border-collapse p-4', styles.table)}>
        {caption && <caption>{caption}</caption>}

        <tbody>
          <tr>
            {headers.map((columnTitle, index) => (
              <th key={index}>{columnTitle}</th>
            ))}
          </tr>

          {data.map((row, index) => (
            <tr key={index}>
              <td data-cell='شماره تراکنش'>{row.transactionId}</td>
              <td data-cell='تاریخ و ساعت'>{row.date}</td>
              <td data-cell='مبلغ'>{row.price}</td>
              <td data-cell='نوع تراکنش'>{row.transactionType}</td>
              <td data-cell='توضیحات' className='max-w-[240px]'>
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
