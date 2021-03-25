/**
 * @since 3.0.0
 */
import { ap as ap_, Apply, Apply1, Apply2, Apply2C, Apply3, Apply3C } from './Apply'
import { Chain, Chain1, Chain2, Chain2C, Chain3, Chain3C } from './Chain'
import { flow, Lazy, pipe } from './function'
import { Functor, Functor1, Functor2, Functor2C, Functor3, Functor3C, map as map_ } from './Functor'
import { HKT, Kind, Kind2, Kind3, URIS, URIS2, URIS3 } from './HKT'
import { Monad, Monad1, Monad2, Monad2C, Monad3, Monad3C } from './Monad'
import { Pointed, Pointed1, Pointed2, Pointed2C, Pointed3, Pointed3C } from './Pointed'
import { Semigroup } from './Semigroup'
import * as T from './These'

import These = T.These

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @since 3.0.0
 */
export function right<F extends URIS3>(F: Pointed3<F>): <A, R, FE, E = never>(a: A) => Kind3<F, R, FE, These<E, A>>
export function right<F extends URIS3, FE>(F: Pointed3C<F, FE>): <A, R, E = never>(a: A) => Kind3<F, R, FE, These<E, A>>
export function right<F extends URIS2>(F: Pointed2<F>): <A, FE, E = never>(a: A) => Kind2<F, FE, These<E, A>>
export function right<F extends URIS2, FE>(F: Pointed2C<F, FE>): <A, E = never>(a: A) => Kind2<F, FE, These<E, A>>
export function right<F extends URIS>(F: Pointed1<F>): <A, E = never>(a: A) => Kind<F, These<E, A>>
export function right<F>(F: Pointed<F>): <A, E = never>(a: A) => HKT<F, These<E, A>>
export function right<F>(F: Pointed<F>): <A, E = never>(a: A) => HKT<F, These<E, A>> {
  return flow(T.right, F.of)
}

/**
 * @since 3.0.0
 */
export function left<F extends URIS3>(F: Pointed3<F>): <E, R, FE, A = never>(e: E) => Kind3<F, R, FE, These<E, A>>
export function left<F extends URIS3, FE>(F: Pointed3C<F, FE>): <E, R, A = never>(e: E) => Kind3<F, R, FE, These<E, A>>
export function left<F extends URIS2>(F: Pointed2<F>): <E, FE, A = never>(e: E) => Kind2<F, FE, These<E, A>>
export function left<F extends URIS2, FE>(F: Pointed2C<F, FE>): <E, A = never>(e: E) => Kind2<F, FE, These<E, A>>
export function left<F extends URIS>(F: Pointed1<F>): <E, A = never>(e: E) => Kind<F, These<E, A>>
export function left<F>(F: Pointed<F>): <E, A = never>(e: E) => HKT<F, These<E, A>>
export function left<F>(F: Pointed<F>): <E, A = never>(e: E) => HKT<F, These<E, A>> {
  return flow(T.left, F.of)
}

/**
 * @since 3.0.0
 */
export function both<F extends URIS3>(F: Pointed3<F>): <E, A, R, FE>(e: E, a: A) => Kind3<F, R, FE, These<E, A>>
export function both<F extends URIS3, FE>(F: Pointed3C<F, FE>): <E, A, R>(e: E, a: A) => Kind3<F, R, FE, These<E, A>>
export function both<F extends URIS2>(F: Pointed2<F>): <E, A, FE>(e: E, a: A) => Kind2<F, FE, These<E, A>>
export function both<F extends URIS2, FE>(F: Pointed2C<F, FE>): <E, A>(e: E, a: A) => Kind2<F, FE, These<E, A>>
export function both<F extends URIS>(F: Pointed1<F>): <E, A>(e: E, a: A) => Kind<F, These<E, A>>
export function both<F>(F: Pointed<F>): <E, A = never>(e: E, a: A) => HKT<F, These<E, A>>
export function both<F>(F: Pointed<F>): <E, A = never>(e: E, a: A) => HKT<F, These<E, A>> {
  return flow(T.both, F.of)
}

/**
 * @since 3.0.0
 */
export function rightF<F extends URIS3>(
  F: Functor3<F>
): <R, FE, A, E = never>(fa: Kind3<F, R, FE, A>) => Kind3<F, R, FE, These<E, A>>
export function rightF<F extends URIS3, FE>(
  F: Functor3C<F, FE>
): <R, A, E = never>(fa: Kind3<F, R, FE, A>) => Kind3<F, R, FE, These<E, A>>
export function rightF<F extends URIS2>(
  F: Functor2<F>
): <FE, A, E = never>(fa: Kind2<F, FE, A>) => Kind2<F, FE, These<E, A>>
export function rightF<F extends URIS2, FE>(
  F: Functor2C<F, FE>
): <A, E = never>(fa: Kind2<F, FE, A>) => Kind2<F, FE, These<E, A>>
export function rightF<F extends URIS>(F: Functor1<F>): <A, E = never>(fa: Kind<F, A>) => Kind<F, These<E, A>>
export function rightF<F>(F: Functor<F>): <A, E = never>(fa: HKT<F, A>) => HKT<F, These<E, A>>
export function rightF<F>(F: Functor<F>): <A, E = never>(fa: HKT<F, A>) => HKT<F, These<E, A>> {
  return F.map(T.right)
}

/**
 * @since 3.0.0
 */
export function leftF<F extends URIS3>(
  F: Functor3<F>
): <R, FE, E, A = never>(fe: Kind3<F, R, FE, E>) => Kind3<F, R, FE, These<E, A>>
export function leftF<F extends URIS3, FE>(
  F: Functor3C<F, FE>
): <R, E, A = never>(fe: Kind3<F, R, FE, E>) => Kind3<F, R, FE, These<E, A>>
export function leftF<F extends URIS2>(
  F: Functor2<F>
): <FE, E, A = never>(fe: Kind2<F, FE, E>) => Kind2<F, FE, These<E, A>>
export function leftF<F extends URIS2, FE>(
  F: Functor2C<F, FE>
): <E, A = never>(fe: Kind2<F, FE, E>) => Kind2<F, FE, These<E, A>>
export function leftF<F extends URIS>(F: Functor1<F>): <E, A = never>(fe: Kind<F, E>) => Kind<F, These<E, A>>
export function leftF<F>(F: Functor<F>): <E, A = never>(fe: HKT<F, E>) => HKT<F, These<E, A>>
export function leftF<F>(F: Functor<F>): <E, A = never>(fe: HKT<F, E>) => HKT<F, These<E, A>> {
  return F.map(T.left)
}

// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------

/**
 * @since 3.0.0
 */
export function map<F extends URIS3>(
  F: Functor3<F>
): <A, B>(f: (a: A) => B) => <R, FE, E>(fa: Kind3<F, R, FE, These<E, A>>) => Kind3<F, R, FE, These<E, B>>
export function map<F extends URIS3, FE>(
  F: Functor3C<F, FE>
): <A, B>(f: (a: A) => B) => <R, E>(fa: Kind3<F, R, FE, These<E, A>>) => Kind3<F, R, FE, These<E, B>>
export function map<F extends URIS2>(
  F: Functor2<F>
): <A, B>(f: (a: A) => B) => <FE, E>(fa: Kind2<F, FE, These<E, A>>) => Kind2<F, FE, These<E, B>>
export function map<F extends URIS2, FE>(
  F: Functor2C<F, FE>
): <A, B>(f: (a: A) => B) => <E>(fa: Kind2<F, FE, These<E, A>>) => Kind2<F, FE, These<E, B>>
export function map<F extends URIS>(
  F: Functor1<F>
): <A, B>(f: (a: A) => B) => <E>(fa: Kind<F, These<E, A>>) => Kind<F, These<E, B>>
export function map<F>(F: Functor<F>): <A, B>(f: (a: A) => B) => <E>(fa: HKT<F, These<E, A>>) => HKT<F, These<E, B>>
export function map<F>(F: Functor<F>): <A, B>(f: (a: A) => B) => <E>(fa: HKT<F, These<E, A>>) => HKT<F, These<E, B>> {
  return map_(F, T.Functor)
}

/**
 * @since 3.0.0
 */
export function ap<F extends URIS3, E>(
  F: Apply3<F>,
  S: Semigroup<E>
): <R, FE, A>(
  fa: Kind3<F, R, FE, These<E, A>>
) => <B>(fab: Kind3<F, R, FE, These<E, (a: A) => B>>) => Kind3<F, R, FE, These<E, B>>
export function ap<F extends URIS3, FE, E>(
  F: Apply3C<F, FE>,
  S: Semigroup<E>
): <R, A>(
  fa: Kind3<F, R, FE, These<E, A>>
) => <B>(fab: Kind3<F, R, FE, These<E, (a: A) => B>>) => Kind3<F, R, FE, These<E, B>>
export function ap<F extends URIS2, E>(
  F: Apply2<F>,
  S: Semigroup<E>
): <FE, A>(fa: Kind2<F, FE, These<E, A>>) => <B>(fab: Kind2<F, FE, These<E, (a: A) => B>>) => Kind2<F, FE, These<E, B>>
export function ap<F extends URIS2, FE, E>(
  F: Apply2C<F, FE>,
  S: Semigroup<E>
): <A>(fa: Kind2<F, FE, These<E, A>>) => <B>(fab: Kind2<F, FE, These<E, (a: A) => B>>) => Kind2<F, FE, These<E, B>>
export function ap<F extends URIS, E>(
  F: Apply1<F>,
  S: Semigroup<E>
): <A>(fa: Kind<F, These<E, A>>) => <B>(fab: Kind<F, These<E, (a: A) => B>>) => Kind<F, These<E, B>>
export function ap<F, E>(
  F: Apply<F>,
  S: Semigroup<E>
): <A>(fa: HKT<F, These<E, A>>) => <B>(fab: HKT<F, These<E, (a: A) => B>>) => HKT<F, These<E, B>>
export function ap<F, E>(
  F: Apply<F>,
  S: Semigroup<E>
): <A>(fa: HKT<F, These<E, A>>) => <B>(fab: HKT<F, These<E, (a: A) => B>>) => HKT<F, These<E, B>> {
  return ap_(F, T.getApply(S))
}

/**
 * @since 3.0.0
 */
export function chain<M extends URIS3, E>(
  M: Monad3<M>,
  S: Semigroup<E>
): <A, R, ME, B>(
  f: (a: A) => Kind3<M, R, ME, These<E, B>>
) => (ma: Kind3<M, R, ME, These<E, A>>) => Kind3<M, R, ME, These<E, B>>
export function chain<M extends URIS3, ME, E>(
  M: Monad3C<M, ME>,
  S: Semigroup<E>
): <A, R, B>(
  f: (a: A) => Kind3<M, R, ME, These<E, B>>
) => (ma: Kind3<M, R, ME, These<E, A>>) => Kind3<M, R, ME, These<E, B>>
export function chain<M extends URIS2, E>(
  M: Monad2<M>,
  S: Semigroup<E>
): <A, ME, B>(f: (a: A) => Kind2<M, ME, These<E, B>>) => (ma: Kind2<M, ME, These<E, A>>) => Kind2<M, ME, These<E, B>>
export function chain<M extends URIS2, ME, E>(
  M: Monad2C<M, ME>,
  S: Semigroup<E>
): <A, B>(f: (a: A) => Kind2<M, ME, These<E, B>>) => (ma: Kind2<M, ME, These<E, A>>) => Kind2<M, ME, These<E, B>>
export function chain<M extends URIS, E>(
  M: Monad1<M>,
  S: Semigroup<E>
): <A, B>(f: (a: A) => Kind<M, These<E, B>>) => (ma: Kind<M, These<E, A>>) => Kind<M, These<E, B>>
export function chain<M, E>(
  M: Monad<M>,
  S: Semigroup<E>
): <A, B>(f: (a: A) => HKT<M, These<E, B>>) => (ma: HKT<M, These<E, A>>) => HKT<M, These<E, B>>
export function chain<M, E>(
  M: Monad<M>,
  S: Semigroup<E>
): <A, B>(f: (a: A) => HKT<M, These<E, B>>) => (ma: HKT<M, These<E, A>>) => HKT<M, These<E, B>> {
  const _left = left(M)
  return (f) => (ma) =>
    pipe(
      ma,
      M.chain(
        T.match(_left, f, (e1, a) =>
          pipe(
            f(a),
            M.map(
              T.match(
                (e2) => T.left(S.concat(e2)(e1)),
                (b) => T.both(e1, b),
                (e2, b) => T.both(S.concat(e2)(e1), b)
              )
            )
          )
        )
      )
    )
}

/**
 * @since 3.0.0
 */
export function bimap<F extends URIS3>(
  F: Functor3<F>
): <E, G, A, B>(
  f: (e: E) => G,
  g: (a: A) => B
) => <R, FE>(fea: Kind3<F, R, FE, These<E, A>>) => Kind3<F, R, FE, These<G, B>>
export function bimap<F extends URIS3, FE>(
  F: Functor3C<F, FE>
): <E, G, A, B>(
  f: (e: E) => G,
  g: (a: A) => B
) => <R>(fea: Kind3<F, R, FE, These<E, A>>) => Kind3<F, R, FE, These<G, B>>
export function bimap<F extends URIS2>(
  F: Functor2<F>
): <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => <FE>(fea: Kind2<F, FE, These<E, A>>) => Kind2<F, FE, These<G, B>>
export function bimap<F extends URIS2, FE>(
  F: Functor2C<F, FE>
): <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fea: Kind2<F, FE, These<E, A>>) => Kind2<F, FE, These<G, B>>
export function bimap<F extends URIS>(
  F: Functor1<F>
): <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fea: Kind<F, These<E, A>>) => Kind<F, These<G, B>>
export function bimap<F>(
  F: Functor<F>
): <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fea: HKT<F, These<E, A>>) => HKT<F, These<G, B>>
export function bimap<F>(
  F: Functor<F>
): <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fea: HKT<F, These<E, A>>) => HKT<F, These<G, B>> {
  return flow(T.bimap, F.map)
}

/**
 * @since 3.0.0
 */
export function mapLeft<F extends URIS3>(
  F: Functor3<F>
): <E, G>(f: (e: E) => G) => <R, FE, A>(fea: Kind3<F, R, FE, These<E, A>>) => Kind3<F, R, FE, These<G, A>>
export function mapLeft<F extends URIS3, FE>(
  F: Functor3C<F, FE>
): <E, G>(f: (e: E) => G) => <R, A>(fea: Kind3<F, R, FE, These<E, A>>) => Kind3<F, R, FE, These<G, A>>
export function mapLeft<F extends URIS2>(
  F: Functor2<F>
): <E, G>(f: (e: E) => G) => <FE, A>(fea: Kind2<F, FE, These<E, A>>) => Kind2<F, FE, These<G, A>>
export function mapLeft<F extends URIS2, FE>(
  F: Functor2C<F, FE>
): <E, G>(f: (e: E) => G) => <A>(fea: Kind2<F, FE, These<E, A>>) => Kind2<F, FE, These<G, A>>
export function mapLeft<F extends URIS>(
  F: Functor1<F>
): <E, G>(f: (e: E) => G) => <A>(fea: Kind<F, These<E, A>>) => Kind<F, These<G, A>>
export function mapLeft<F>(
  F: Functor<F>
): <E, G>(f: (e: E) => G) => <A>(fea: HKT<F, These<E, A>>) => HKT<F, These<G, A>>
export function mapLeft<F>(
  F: Functor<F>
): <E, G>(f: (e: E) => G) => <A>(fea: HKT<F, These<E, A>>) => HKT<F, These<G, A>> {
  return (f) => F.map(T.mapLeft(f))
}

// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------

/**
 * @since 3.0.0
 */
export function match<F extends URIS3>(
  F: Functor3<F>
): <E, B, A>(
  onLeft: (e: E) => B,
  onRight: (a: A) => B,
  onBoth: (e: E, a: A) => B
) => <R, FE>(ma: Kind3<F, R, FE, These<E, A>>) => Kind3<F, R, FE, B>
export function match<F extends URIS3, FE>(
  F: Functor3C<F, FE>
): <E, B, A>(
  onLeft: (e: E) => B,
  onRight: (a: A) => B,
  onBoth: (e: E, a: A) => B
) => <R>(ma: Kind3<F, R, FE, These<E, A>>) => Kind3<F, R, FE, B>
export function match<F extends URIS2>(
  F: Functor2<F>
): <E, B, A>(
  onLeft: (e: E) => B,
  onRight: (a: A) => B,
  onBoth: (e: E, a: A) => B
) => <FE>(ma: Kind2<F, FE, These<E, A>>) => Kind2<F, FE, B>
export function match<M extends URIS2, FE>(
  F: Functor2C<M, FE>
): <E, B, A>(
  onLeft: (e: E) => B,
  onRight: (a: A) => B,
  onBoth: (e: E, a: A) => B
) => (ma: Kind2<M, FE, These<E, A>>) => Kind2<M, FE, B>
export function match<F extends URIS>(
  F: Functor1<F>
): <E, B, A>(
  onLeft: (e: E) => B,
  onRight: (a: A) => B,
  onBoth: (e: E, a: A) => B
) => (ma: Kind<F, These<E, A>>) => Kind<F, B>
export function match<F>(
  F: Functor<F>
): <E, B, A>(
  onLeft: (e: E) => B,
  onRight: (a: A) => B,
  onBoth: (e: E, a: A) => B
) => (ma: HKT<F, These<E, A>>) => HKT<F, B>
export function match<F>(
  F: Functor<F>
): <E, B, A>(
  onLeft: (e: E) => B,
  onRight: (a: A) => B,
  onBoth: (e: E, a: A) => B
) => (ma: HKT<F, These<E, A>>) => HKT<F, B> {
  return flow(T.match, F.map)
}

/**
 * @since 3.0.0
 */
export function matchE<M extends URIS3>(
  M: Chain3<M>
): <E, R, ME, B, A>(
  onLeft: (e: E) => Kind3<M, R, ME, B>,
  onRight: (a: A) => Kind3<M, R, ME, B>,
  onBoth: (e: E, a: A) => Kind3<M, R, ME, B>
) => (ma: Kind3<M, R, ME, These<E, A>>) => Kind3<M, R, ME, B>
export function matchE<M extends URIS3, ME>(
  M: Chain3C<M, ME>
): <E, R, B, A>(
  onLeft: (e: E) => Kind3<M, R, ME, B>,
  onRight: (a: A) => Kind3<M, R, ME, B>,
  onBoth: (e: E, a: A) => Kind3<M, R, ME, B>
) => (ma: Kind3<M, R, ME, These<E, A>>) => Kind3<M, R, ME, B>
export function matchE<M extends URIS2>(
  M: Chain2<M>
): <E, ME, B, A>(
  onLeft: (e: E) => Kind2<M, ME, B>,
  onRight: (a: A) => Kind2<M, ME, B>,
  onBoth: (e: E, a: A) => Kind2<M, ME, B>
) => (ma: Kind2<M, ME, These<E, A>>) => Kind2<M, ME, B>
export function matchE<M extends URIS2, ME>(
  M: Chain2C<M, ME>
): <E, B, A>(
  onLeft: (e: E) => Kind2<M, ME, B>,
  onRight: (a: A) => Kind2<M, ME, B>,
  onBoth: (e: E, a: A) => Kind2<M, ME, B>
) => (ma: Kind2<M, ME, These<E, A>>) => Kind2<M, ME, B>
export function matchE<M extends URIS>(
  M: Chain1<M>
): <E, B, A>(
  onLeft: (e: E) => Kind<M, B>,
  onRight: (a: A) => Kind<M, B>,
  onBoth: (e: E, a: A) => Kind<M, B>
) => (ma: Kind<M, These<E, A>>) => Kind<M, B>
export function matchE<M>(
  M: Chain<M>
): <E, B, A>(
  onLeft: (e: E) => HKT<M, B>,
  onRight: (a: A) => HKT<M, B>,
  onBoth: (e: E, a: A) => HKT<M, B>
) => (ma: HKT<M, These<E, A>>) => HKT<M, B>
export function matchE<M>(
  M: Chain<M>
): <E, B, A>(
  onLeft: (e: E) => HKT<M, B>,
  onRight: (a: A) => HKT<M, B>,
  onBoth: (e: E, a: A) => HKT<M, B>
) => (ma: HKT<M, These<E, A>>) => HKT<M, B> {
  return flow(T.match, M.chain)
}

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * @since 3.0.0
 */
export function swap<F extends URIS3>(
  F: Functor3<F>
): <R, FE, E, A>(ma: Kind3<F, R, FE, These<E, A>>) => Kind3<F, R, FE, These<A, E>>
export function swap<F extends URIS3, FE>(
  F: Functor3C<F, FE>
): <R, E, A>(ma: Kind3<F, R, FE, These<E, A>>) => Kind3<F, R, FE, These<A, E>>
export function swap<F extends URIS2>(
  F: Functor2<F>
): <FE, E, A>(ma: Kind2<F, FE, These<E, A>>) => Kind2<F, FE, These<A, E>>
export function swap<F extends URIS2, FE>(
  F: Functor2C<F, FE>
): <E, A>(ma: Kind2<F, FE, These<E, A>>) => Kind2<F, FE, These<A, E>>
export function swap<F extends URIS>(F: Functor1<F>): <E, A>(ma: Kind<F, These<E, A>>) => Kind<F, These<A, E>>
export function swap<F>(F: Functor<F>): <E, A>(ma: HKT<F, These<E, A>>) => HKT<F, These<A, E>>
export function swap<F>(F: Functor<F>): <E, A>(ma: HKT<F, These<E, A>>) => HKT<F, These<A, E>> {
  return F.map(T.swap)
}

/**
 * @since 3.0.0
 */
export function toTuple2<F extends URIS3>(
  F: Functor3<F>
): <E, A>(e: Lazy<E>, a: Lazy<A>) => <R, FE>(fa: Kind3<F, R, FE, These<E, A>>) => Kind3<F, R, FE, readonly [E, A]>
export function toTuple2<F extends URIS3, FE>(
  F: Functor3C<F, FE>
): <E, A>(e: Lazy<E>, a: Lazy<A>) => <R>(fa: Kind3<F, R, FE, These<E, A>>) => Kind3<F, R, FE, readonly [E, A]>
export function toTuple2<F extends URIS2>(
  F: Functor2<F>
): <E, A>(e: Lazy<E>, a: Lazy<A>) => <FE>(fa: Kind2<F, FE, These<E, A>>) => Kind2<F, FE, readonly [E, A]>
export function toTuple2<F extends URIS2, FE>(
  F: Functor2C<F, FE>
): <E, A>(e: Lazy<E>, a: Lazy<A>) => (fa: Kind2<F, FE, These<E, A>>) => Kind2<F, FE, readonly [E, A]>
export function toTuple2<F extends URIS>(
  F: Functor1<F>
): <E, A>(e: Lazy<E>, a: Lazy<A>) => (fa: Kind<F, These<E, A>>) => Kind<F, readonly [E, A]>
export function toTuple2<F>(
  F: Functor<F>
): <E, A>(e: Lazy<E>, a: Lazy<A>) => (fa: HKT<F, These<E, A>>) => HKT<F, readonly [E, A]>
export function toTuple2<F>(
  F: Functor<F>
): <E, A>(e: Lazy<E>, a: Lazy<A>) => (fa: HKT<F, These<E, A>>) => HKT<F, readonly [E, A]> {
  return flow(T.toTuple2, F.map)
}
