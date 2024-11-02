import RowRiwayat from "./rowRiwayat";

export default function RiwayatPendidikan() {
    return (
        <div className="container mx-auto p-2 text-center">
            <div className="container mx-auto p-2 text-center pt-20">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Riwayat Pendidikan</h2>
            </div>
            <RowRiwayat jenjang="SD" sekolah="SDN 2 Jayagiri" tahun="2010 - 2016" />
            <RowRiwayat jenjang="SMP" sekolah="SMPN 1 Lembang" tahun="2016 - 2019" />
            <RowRiwayat jenjang="SMA" sekolah="SMK 45 Lembang" tahun="2019 - 2022" />
            <RowRiwayat jenjang="Perguruan Tinggi" sekolah="Ma'soem University" tahun="2022 - 2026" />
        </div>
    );
}