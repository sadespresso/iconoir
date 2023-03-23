import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class DevModeLaptop extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const DevModeLaptop({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.2 14.2222V4C3.2 2.89543 4.09543 2 5.2 2H18.8C19.9046 2 20.8 2.89543 20.8 4V14.2222M3.2 14.2222H20.8M3.2 14.2222L1.71969 19.4556C1.35863 20.7321 2.31762 22 3.64418 22H20.3558C21.6824 22 22.6414 20.7321 22.2803 19.4556L20.8 14.2222" stroke="currentColor"/>
<path d="M11 19L13 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 6L16 8L14 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 6L8 8L10 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}