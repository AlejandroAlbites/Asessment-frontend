import useCountdown from '../hooks/useCountdown';
import { Link } from 'react-router-dom';

function TimerRandom({ id }) {
  const endTime =
    new Date().getTime() + 60000 * (Math.round(Math.random() * 5) + 1); // 2 minutes
  const [timeLeft, setEndTime] = useCountdown(endTime);

  const minutes = ('0' + (Math.floor(timeLeft / 60000) % 60)).slice(-2);
  const seconds = ('0' + (Math.floor(timeLeft / 1000) % 60)).slice(-2);

  return (
    <div className="app">
      <p className="div__timer-product-detail">{`${minutes}:${seconds}`}</p>
      <div>
        <Link to={timeLeft === 0 ? '/' : `productDetail/${id}`}>
          <p
            className={
              timeLeft === 0
                ? 'p__card-product-detail-desactive'
                : 'p__card-product-detail'
            }>
            Go to detail
          </p>
        </Link>
      </div>
    </div>
  );
}

export default TimerRandom;
