
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery categories
  const categories = [
    { id: 'landscape', name: 'Landscapes' },
    { id: 'wildlife', name: 'Wildlife' },
    { id: 'community', name: 'Community Activities' },
    { id: 'conservation', name: 'Conservation' }
  ];

  // Gallery images
  const galleryImages = {
    landscape: [
      { 
        src: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86', 
        alt: 'Forest trees in Nandi North', 
        title: 'Nandi North Forest',
        description: 'Beautiful trees in the heart of Nandi North Forest' 
      },
      { 
        src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843', 
        alt: 'Sunlight through forest canopy', 
        title: 'Forest Canopy',
        description: 'Sunlight filtering through the dense forest canopy' 
      },
      { 
        src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e', 
        alt: 'Mountain landscape view', 
        title: 'Mountain View',
        description: 'Breath-taking view of mountains in Nandi County' 
      },
      { 
        src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', 
        alt: 'Water body surrounded by forest', 
        title: 'Forest Lake',
        description: 'Natural water body within the Nandi North Forest' 
      },
      { 
        src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b', 
        alt: 'Aerial view of forest mountains', 
        title: 'Aerial Forest View',
        description: 'Bird\'s eye view of the lush green forest mountains' 
      },
      { 
        src: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3', 
        alt: 'Rocky mountain landscape', 
        title: 'Rocky Terrain',
        description: 'Rocky mountain terrain with grassland within the conservation area' 
      },
    ],
    wildlife: [
      { 
        src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027', 
        alt: 'Deer in forest', 
        title: 'Forest Deer',
        description: 'Deer spotted in Nandi North Forest' 
      },
      { 
        src: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d', 
        alt: 'Zebra and antelope', 
        title: 'Grassland Wildlife',
        description: 'Zebra and antelope grazing in the protected areas' 
      },
      { 
        src: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a', 
        alt: 'Ox in mountain', 
        title: 'Mountain Ox',
        description: 'Ox spotted in the mountainous regions of the conservation area' 
      },
    ],
    community: [
      { 
        src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9', 
        alt: 'Community tree planting', 
        title: 'Tree Planting',
        description: 'Community members participating in a tree planting event' 
      },
      { 
        src: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86', 
        alt: 'Forest conservation workshop', 
        title: 'Conservation Workshop',
        description: 'Community workshop on forest conservation techniques' 
      },
    ],
    conservation: [
      { 
        src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843', 
        alt: 'Forest regeneration project', 
        title: 'Regeneration Project',
        description: 'Forest regeneration project in previously degraded areas' 
      },
      { 
        src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', 
        alt: 'Water conservation project', 
        title: 'Water Conservation',
        description: 'Water conservation efforts to protect forest water sources' 
      },
    ],
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseDialog = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-bg text-white">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
            }}>
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
              <p className="text-xl text-gray-100 leading-relaxed">
                Explore our collection of photos showcasing the beauty of Nandi North Forest and our conservation activities.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-cfa-green-600 mb-4">Photo Gallery</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Browse through our collection of images showcasing the natural beauty of Nandi North Forest and the work of our community.
              </p>
            </div>

            <Tabs defaultValue="landscape" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
                {categories.map(category => (
                  <TabsTrigger key={category.id} value={category.id} className="text-base">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {categories.map(category => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages[category.id].map((image, index) => (
                      <div 
                        key={index} 
                        className="overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-all duration-300"
                        onClick={() => handleImageClick(image)}
                      >
                        <div className="aspect-w-4 aspect-h-3">
                          <img 
                            src={`${image.src}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`} 
                            alt={image.alt} 
                            className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-3 bg-white">
                          <h3 className="font-medium text-gray-900 truncate">{image.title}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Image Dialog */}
        {selectedImage && (
          <Dialog open={!!selectedImage} onOpenChange={handleCloseDialog}>
            <DialogContent className="sm:max-w-4xl">
              <div className="absolute top-2 right-2 z-50">
                <button 
                  onClick={handleCloseDialog}
                  className="p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-1">
                <img 
                  src={`${selectedImage.src}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`} 
                  alt={selectedImage.alt} 
                  className="w-full h-auto rounded"
                />
                <DialogTitle className="mt-4 text-xl">{selectedImage.title}</DialogTitle>
                <DialogDescription className="text-gray-700">{selectedImage.description}</DialogDescription>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
