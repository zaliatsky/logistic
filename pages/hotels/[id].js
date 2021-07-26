import {useRouter} from 'next/router';
import MainLayout from '../../components/MainLayout';

const Hotel = () => {
  const router = useRouter();

  return <MainLayout>This is hotel page with id {router.query.id}</MainLayout>
}

export default  Hotel;
