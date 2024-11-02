import RowPekerjaan from "./rowPekerjaan";
import RowRiwayat from "./rowPekerjaan";

export default function RiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-2 text-center">
            <div className="container mx-auto p-2 text-center pt-20">
                <h2 className="text-2xl font-bold mb-4">Riwayat Pekerjaan</h2>
            </div>
            <RowPekerjaan tahun="2021" instansi="Koyu Hijab" sebagai="Talent Konten" />
            <RowPekerjaan tahun="2022" instansi="Kedai Kopi Paten" sebagai="Barista" />
            <RowPekerjaan tahun="2024" instansi="Kantor Desa Cipacing" sebagai="Magang" />
        </div>
    );
}