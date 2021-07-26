import {useRouter} from 'next/router';

const Hotel = () => {
  const router = useRouter();

  return <div>This is hotel page with id {router.query.id}</div>
}

export default  Hotel;
