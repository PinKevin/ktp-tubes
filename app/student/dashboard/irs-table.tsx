import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { IRS } from '@/models/irs';

// const testIrs: IRS[] = [
//   {
//     id: 1,
//     mahasiswa_id: '240601',
//     jumlah_sks: 20,
//     semester: 1,
//     berkas_irs: 'test',
//     isVerified: false,
//   },
//   {
//     id: 2,
//     mahasiswa_id: '240602',
//     jumlah_sks: 20,
//     semester: 3,
//     berkas_irs: 'test',
//     isVerified: true,
//   },
//   {
//     id: 3,
//     mahasiswa_id: '240603',
//     jumlah_sks: 22,
//     semester: 2,
//     berkas_irs: 'test',
//     isVerified: false,
//   },
// ];

export default function IRSTable({ irsList }: { irsList: IRS[] }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Daftar IRS</CardTitle>
        <CardDescription>Mahasiswa yang IRS-nya sudah dan belum disetujui</CardDescription>
      </CardHeader>
      <CardContent>
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Nama</TableHead>
              <TableHead>Semester</TableHead>
              <TableHead>Jumlah SKS</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {irsList.map((irs, index) => (
              <TableRow key={irs.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{irs.mahasiswa_id}</TableCell>
                <TableCell>{irs.semester}</TableCell>
                <TableCell>{irs.jumlah_sks}</TableCell>
                <TableCell>{irs.isVerified ? 'Sudah Disetujui' : 'Belum Disetujui'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
