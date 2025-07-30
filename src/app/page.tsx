import Link from "next/link";
import { MessageCircle, Users, Zap, Shield, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="px-4 py-20 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <MessageCircle className="h-20 w-20 text-blue-600" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            BEM <span className="text-blue-600">Chatting</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            adalah tempat ngobrol khusus buat anak-anak BEM — biar koordinasi kegiatan, 
            rapat divisi, atau sekadar diskusi jadi makin lancar dan seru. ✌️
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/messages" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Mulai Chatting
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/login" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kenapa Pilih BEM Chatting?
            </h2>
            <p className="text-xl text-gray-600">
              Platform yang dirancang khusus untuk kebutuhan organisasi BEM
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Instan & Cepat</h3>
              <p className="text-gray-600 leading-relaxed">
                Kirim pesan secara real-time tanpa delay. Perfect untuk koordinasi mendadak 
                atau diskusi urgent di tengah kesibukan organisasi.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Terhubung Sesama</h3>
              <p className="text-gray-600 leading-relaxed">
                Jembatan komunikasi antar divisi BEM. Dari Humas sampai PDD, 
                semua bisa saling koordinasi dengan mudah dan efektif.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sharing Makin Seru</h3>
              <p className="text-gray-600 leading-relaxed">
                Share KJ, kuis, tugas, atau meme lucu jadi lebih asik! 
                Bikin suasana organisasi makin cair dan produktif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Siap Bergabung dengan Komunitas BEM?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Mulai pengalaman chatting yang berbeda. Lebih terorganisir, lebih seru!
          </p>
          <Link 
            href="/messages" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
          >
            Mulai Sekarang
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-4">
            <MessageCircle className="h-8 w-8 text-blue-400 mr-2" />
            <span className="text-xl font-bold">BEM Chatting</span>
          </div>
          <p className="text-gray-400">
            Platform komunikasi terbaik untuk organisasi BEM
          </p>
        </div>
      </footer>
    </div>
  );
}
