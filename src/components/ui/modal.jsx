import Link from 'next/link';
import { ArrowBigLeft } from 'lucide-react';

export const Modal = () => {
    return (
        <div className="absolute w-full h-screen flex justify-between">
            <div className="top-0 left-0 p-4 text-wh drop-shadow-bla">
                <Link href="/">
                    <ArrowBigLeft size={64} />
                </Link>
            </div>
            <div>
                <div className='font-offbit rounded-2xl h-28 bg-wh w-[36em] flex-col flex justify-center p-5 pt-8 text-bla'>
                    <div className='text-5xl'>
                        Generate Trip
                    </div>
                    <div className='text-lg text-bla/50'>
                        Select a country below:
                    </div>
                </div>
                <div className='rounded-2xl w-[36em] bg-wh p-5'>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Tristique molestie mauris consectetur viverra pharetra. Eget pharetra mi duis euismod cursus conubia nascetur. Nam mi pellentesque platea porta tristique nam non vivamus. Praesent augue luctus mi aptent interdum maximus viverra maecenas. Arcu litora facilisis elit velit ornare volutpat. Nostra ipsum nulla imperdiet facilisis pharetra, tortor euismod. Fermentum proin magna sagittis aliquam porttitor posuere non ultrices habitasse. Natoque consectetur rhoncus ultrices phasellus etiam nostra vitae consectetur.

                    Dignissim venenatis accumsan ullamcorper tempus suspendisse duis. Ullamcorper nulla mattis finibus dignissim metus amet montes faucibus. Parturient commodo ante sapien consectetur himenaeos taciti nam maximus. Rutrum nibh fringilla odio vel inceptos tincidunt. At nulla parturient tincidunt cras tincidunt ac. Velit purus class lacus tincidunt bibendum montes netus odio porta.

                    Pulvinar fringilla vivamus vehicula, mauris interdum ridiculus risus. Metus arcu venenatis; a montes nec sed interdum. Tincidunt quam sit rhoncus magna convallis. Sapien euismod taciti himenaeos magnis erat velit. Velit conubia lacus lacinia pellentesque mollis elit. Litora cursus diam vel facilisis nunc mauris libero mauris. Commodo fermentum magnis neque fringilla litora risus ornare diam ante.

                    Aptent risus rhoncus habitasse laoreet elementum potenti ante. Platea ultricies egestas dignissim fermentum primis malesuada interdum. Maximus mauris pretium nisl sociosqu eros potenti. Blandit hac mi habitasse mi, mus quam senectus. Tellus duis nunc velit nunc; nascetur euismod quam iaculis. Sollicitudin diam metus tempus sed sit pulvinar placerat. Mauris habitant augue ridiculus, enim molestie imperdiet massa. Enim eros mollis class cubilia porttitor vel?

                    Mauris leo cursus efficitur maximus iaculis praesent. Luctus est vivamus semper hendrerit vulputate in pharetra ultrices sociosqu. Posuere a purus suscipit torquent et conubia penatibus elementum. Arcu auctor nisi a erat, vel habitasse. Vehicula maecenas auctor ante nascetur penatibus nisi. Nostra rutrum sed nam est habitant quam hac. Eros odio consequat finibus egestas per penatibus mus condimentum.

                    Felis parturient vulputate feugiat dolor felis augue at. Aptent ante sodales morbi ridiculus iaculis curae porta. Ipsum habitant viverra tellus magna ultricies massa etiam! Ullamcorper amet rhoncus aenean auctor ullamcorper porta mattis ipsum venenatis. Tellus odio natoque suscipit euismod praesent potenti integer hac. Magnis curabitur commodo turpis consequat senectus taciti praesent leo. Nibh posuere eu turpis tincidunt aenean sed ullamcorper. Velit sagittis elit montes interdum ut semper purus justo. Ridiculus lacinia curabitur duis neque turpis maximus lectus.

                    Arcu pellentesque magna in dis ut ut. Lectus augue sollicitudin lobortis egestas morbi blandit. Litora habitant ultrices sed porttitor placerat dui; metus feugiat venenatis. Etiam class praesent vivamus; facilisis dis metus hac diam lectus. Aliquet primis odio elit ex; curabitur fringilla commodo. Suscipit integer urna libero ornare finibus cras a. Molestie congue maximus viverra posuere sapien vel nisl augue. Aenean eros suspendisse magna curabitur lectus curabitur primis. Gravida praesent in vivamus cubilia sodales cursus.

                    Ac maximus eros lorem, primis ante dis mauris. Volutpat ex netus per imperdiet dapibus parturient penatibus massa. Netus ante fames proin mauris quisque senectus cursus ac. Taciti mi dolor nascetur erat tristique. Mollis ipsum felis proin tristique phasellus posuere ullamcorper metus nostra. Aliquam est natoque vivamus orci eros. Justo potenti blandit pharetra vel facilisi tincidunt vehicula. Sollicitudin scelerisque nibh suspendisse litora aliquam justo senectus. Nisl interdum enim duis sem imperdiet etiam tristique conubia condimentum. Felis odio tortor sodales molestie ultricies cubilia.

                    Nisl pellentesque aliquam nullam donec erat aenean sit. Montes penatibus metus nam nam at; penatibus leo habitant. Laoreet ut blandit adipiscing erat sodales ipsum arcu scelerisque malesuada. Donec erat fusce in a montes tincidunt dis feugiat in. Scelerisque ante mattis iaculis tempor nibh sodales orci blandit dui. Suscipit porta class class ante turpis. Sagittis elementum quam aliquam gravida sociosqu finibus et.

                    Fames dui himenaeos consectetur a nisi. Platea quis sodales augue taciti; ultrices maximus adipiscing. Diam pellentesque pharetra cras velit senectus aenean leo nullam elit. Per mus viverra inceptos ultrices nostra. Interdum lobortis donec at nec; viverra augue odio. Ante urna neque suscipit nibh donec nam lacus primis. Vivamus maximus quam sollicitudin eleifend velit ipsum fames euismod. Cras ornare eget per adipiscing vestibulum pellentesque donec congue posuere. Mollis risus ad morbi, pretium sapien lobortis sagittis leo.
                </div>
            </div>
        </div>
    );
};