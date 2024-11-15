import { Button } from '@/components/ui/button';
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
import { Check, X } from 'lucide-react';

export default function IRSTable({ isVerified, irsList }: { isVerified: boolean; irsList: IRS[] }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{isVerified ? 'Sudah' : 'Belum'} Disetujui</CardTitle>
        <CardDescription>
          Mahasiswa yang IRS-nya {isVerified ? 'sudah' : 'belum'} disetujui
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Nama</TableHead>
              <TableHead>Semester</TableHead>
              <TableHead>Jumlah SKS</TableHead>
              <TableHead>Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {irsList.map((irsList, index) => (
              <TableRow key={irsList.id}>
                <TableCell className="font-medium">{index}</TableCell>
                <TableCell>{irsList.mahasiswa_id}</TableCell>
                <TableCell>{irsList.semester}</TableCell>
                <TableCell>{irsList.jumlah_sks}</TableCell>
                <TableCell>
                  <Button variant="outline" size="icon">
                    {isVerified ? <X /> : <Check />}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
